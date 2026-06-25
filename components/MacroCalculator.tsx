'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Arrow } from './Icons';

type Sex = 'male' | 'female';
type Goal = 'cut' | 'maintain' | 'gain';
type Activity = 1.2 | 1.375 | 1.55 | 1.725;

const activityLabels: { value: Activity; label: string }[] = [
  { value: 1.2, label: 'Sedentary' },
  { value: 1.375, label: 'Light (1–3×)' },
  { value: 1.55, label: 'Moderate (3–5×)' },
  { value: 1.725, label: 'High (6–7×)' },
];

const goalMeta: Record<Goal, { label: string; factor: number; p: number; f: number }> = {
  cut: { label: 'Lose Fat', factor: 0.8, p: 2.2, f: 0.9 },
  maintain: { label: 'Maintain', factor: 1, p: 2.0, f: 1.0 },
  gain: { label: 'Build Muscle', factor: 1.12, p: 2.0, f: 1.0 },
};

export default function MacroCalculator() {
  const [sex, setSex] = useState<Sex>('male');
  const [age, setAge] = useState(28);
  const [height, setHeight] = useState(178); // cm
  const [weight, setWeight] = useState(80); // kg
  const [activity, setActivity] = useState<Activity>(1.55);
  const [goal, setGoal] = useState<Goal>('cut');

  const result = useMemo(() => {
    // Mifflin-St Jeor
    const bmr =
      10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161);
    const tdee = bmr * activity;
    const meta = goalMeta[goal];
    const calories = Math.round((tdee * meta.factor) / 10) * 10;
    const protein = Math.round(weight * meta.p);
    const fat = Math.round(weight * meta.f);
    const carbs = Math.max(0, Math.round((calories - (protein * 4 + fat * 9)) / 4));
    return { calories, protein, fat, carbs };
  }, [sex, age, height, weight, activity, goal]);

  const fieldCls =
    'w-full rounded-md border border-white/10 bg-ink-800 px-4 py-3 font-sans text-bone outline-none transition-colors focus:border-gold/60';

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Inputs */}
      <div className="card p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-dim">Sex</span>
            <div className="grid grid-cols-2 gap-2">
              {(['male', 'female'] as Sex[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSex(s)}
                  className={`rounded-md border py-3 text-sm capitalize transition-colors ${
                    sex === s
                      ? 'border-gold/60 bg-gold/10 text-gold'
                      : 'border-white/10 text-muted hover:text-bone'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-dim">Age</span>
            <input
              type="number"
              value={age}
              min={14}
              max={90}
              onChange={(e) => setAge(+e.target.value)}
              className={fieldCls}
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-dim">Height (cm)</span>
            <input
              type="number"
              value={height}
              min={120}
              max={230}
              onChange={(e) => setHeight(+e.target.value)}
              className={fieldCls}
            />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-dim">Weight (kg)</span>
            <input
              type="number"
              value={weight}
              min={35}
              max={250}
              onChange={(e) => setWeight(+e.target.value)}
              className={fieldCls}
            />
          </label>

          <div className="sm:col-span-2">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-dim">Activity</span>
            <div className="grid grid-cols-2 gap-2">
              {activityLabels.map((a) => (
                <button
                  key={a.value}
                  type="button"
                  onClick={() => setActivity(a.value)}
                  className={`rounded-md border py-2.5 text-xs transition-colors ${
                    activity === a.value
                      ? 'border-gold/60 bg-gold/10 text-gold'
                      : 'border-white/10 text-muted hover:text-bone'
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2">
            <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-dim">Goal</span>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(goalMeta) as Goal[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`rounded-md border py-2.5 text-xs transition-colors ${
                    goal === g
                      ? 'border-gold/60 bg-gold/10 text-gold'
                      : 'border-white/10 text-muted hover:text-bone'
                  }`}
                >
                  {goalMeta[g].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="card flex flex-col justify-between p-6 sm:p-8">
        <div>
          <p className="eyebrow">Your Daily Target</p>
          <div className="mt-5 flex items-end gap-2">
            <span className="font-display text-6xl text-gold tnum">
              {result.calories.toLocaleString()}
            </span>
            <span className="mb-2 text-sm text-muted">kcal / day</span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              { label: 'Protein', value: `${result.protein} g`, pct: (result.protein * 4) / result.calories },
              { label: 'Carbs', value: `${result.carbs} g`, pct: (result.carbs * 4) / result.calories },
              { label: 'Fat', value: `${result.fat} g`, pct: (result.fat * 9) / result.calories },
            ].map((m) => (
              <div key={m.label}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-muted">{m.label}</span>
                  <span className="font-medium text-bone tnum">{m.value}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-soft transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.round(m.pct * 100))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-dim">
            An estimate based on the Mifflin-St Jeor formula. Your real plan is calibrated to your
            body, training and lifestyle.
          </p>
          <Link href="/apply" className="btn btn-gold mt-4 w-full text-[0.72rem]">
            Get My Real Plan
            <Arrow width={15} height={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
