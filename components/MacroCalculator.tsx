'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '../lib/content/types';
import { calculator, forms } from '../lib/content/forms';
import { localePath } from '../lib/routes';
import { track } from '../lib/analytics';
import { Arrow } from './Icons';

type Result = {
  maintenance: number;
  target: number;
  proteinMin: number;
  proteinMax: number;
};

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  high: 1.725,
} as const;

type Activity = keyof typeof activityMultipliers;
type Goal = 'lose' | 'maintain' | 'gain';

function roundTo(value: number, nearest: number) {
  return Math.round(value / nearest) * nearest;
}

export default function MacroCalculator({ locale }: { locale: Locale }) {
  const [sex, setSex] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('30');
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('75');
  const [activity, setActivity] = useState<Activity>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const numberFormat = new Intl.NumberFormat(locale === 'ar' ? 'ar-MA' : locale);

  function calculate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      !Number.isFinite(ageValue) ||
      !Number.isFinite(heightValue) ||
      !Number.isFinite(weightValue) ||
      ageValue < 18 ||
      ageValue > 80 ||
      heightValue < 140 ||
      heightValue > 220 ||
      weightValue < 40 ||
      weightValue > 250
    ) {
      setError(
        locale === 'fr'
          ? 'Vérifiez les valeurs : âge 18–80, taille 140–220 cm, poids 40–250 kg.'
          : locale === 'ar'
            ? 'تحقق من القيم: العمر 18–80، الطول 140–220 سم، الوزن 40–250 كغ.'
            : 'Check the values: age 18–80, height 140–220 cm, weight 40–250 kg.',
      );
      setResult(null);
      return;
    }

    setError('');
    const bmr =
      10 * weightValue + 6.25 * heightValue - 5 * ageValue + (sex === 'male' ? 5 : -161);
    const maintenance = bmr * activityMultipliers[activity];
    const target = maintenance * (goal === 'lose' ? 0.85 : goal === 'gain' ? 1.1 : 1);
    setResult({
      maintenance: roundTo(maintenance, 10),
      target: roundTo(target, 10),
      proteinMin: roundTo(weightValue * 1.6, 5),
      proteinMax: roundTo(weightValue * 2.2, 5),
    });
    track('calculator_use', { goal, activity });
  }

  return (
    <div className="panel-raised p-6 sm:p-8">
      <h3 className="font-display text-2xl text-bone">{calculator.title[locale]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-muted">{calculator.intro[locale]}</p>

      <form onSubmit={calculate} className="mt-6">
        <div className="form-grid">
          <div className="field">
            <label className="label" htmlFor="calc-sex">
              {calculator.sex[locale]}
            </label>
            <select
              id="calc-sex"
              className="select"
              value={sex}
              onChange={(event) => setSex(event.target.value as 'male' | 'female')}
            >
              <option value="male">{calculator.male[locale]}</option>
              <option value="female">{calculator.female[locale]}</option>
            </select>
          </div>
          <div className="field">
            <label className="label" htmlFor="calc-age">
              {calculator.age[locale]}
            </label>
            <input
              id="calc-age"
              type="number"
              inputMode="numeric"
              min={18}
              max={80}
              className="input"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="calc-height">
              {calculator.height[locale]}
            </label>
            <input
              id="calc-height"
              type="number"
              inputMode="decimal"
              min={140}
              max={220}
              className="input"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              required
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="calc-weight">
              {calculator.weight[locale]}
            </label>
            <input
              id="calc-weight"
              type="number"
              inputMode="decimal"
              min={40}
              max={250}
              className="input"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              required
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="calc-activity">
              {calculator.activity[locale]}
            </label>
            <select
              id="calc-activity"
              className="select"
              value={activity}
              onChange={(event) => setActivity(event.target.value as Activity)}
            >
              <option value="sedentary">{calculator.activityLevels.sedentary[locale]}</option>
              <option value="light">{calculator.activityLevels.light[locale]}</option>
              <option value="moderate">{calculator.activityLevels.moderate[locale]}</option>
              <option value="high">{calculator.activityLevels.high[locale]}</option>
            </select>
          </div>
          <div className="field">
            <label className="label" htmlFor="calc-goal">
              {calculator.goal[locale]}
            </label>
            <select
              id="calc-goal"
              className="select"
              value={goal}
              onChange={(event) => setGoal(event.target.value as Goal)}
            >
              <option value="lose">{calculator.goals.lose[locale]}</option>
              <option value="maintain">{calculator.goals.maintain[locale]}</option>
              <option value="gain">{calculator.goals.gain[locale]}</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-outline mt-5 w-full sm:w-auto">
          {calculator.calculate[locale]}
          <Arrow width={15} height={15} />
        </button>
      </form>

      {error && (
        <p role="alert" className="field-error mt-5">
          {error}
        </p>
      )}

      <div aria-live="polite" className="mt-6">
        {result && (
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-[0.68rem] uppercase tracking-[0.18em] text-dim">
              {calculator.resultsTitle[locale]}
            </h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="panel p-4">
                <p className="text-xs text-dim">{calculator.maintenance[locale]}</p>
                <p className="tnum mt-1 font-display text-2xl text-bone">
                  {numberFormat.format(result.maintenance)}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-dim">
                  {calculator.kcal[locale]}
                </p>
              </div>
              <div className="panel border-accent/40 p-4">
                <p className="text-xs text-dim">{calculator.target[locale]}</p>
                <p className="tnum mt-1 font-display text-2xl text-accent-soft">
                  {numberFormat.format(result.target)}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-dim">
                  {calculator.kcal[locale]}
                </p>
              </div>
              <div className="panel p-4">
                <p className="text-xs text-dim">{calculator.protein[locale]}</p>
                <p className="tnum mt-1 font-display text-2xl text-bone">
                  {numberFormat.format(result.proteinMin)}–{numberFormat.format(result.proteinMax)}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-dim">
                  {calculator.proteinUnit[locale]}
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-relaxed text-dim">
                {calculator.cta[locale]}
              </p>
              <Link href={localePath(locale, '/apply')} className="btn btn-gold btn-sm shrink-0">
                {calculator.ctaButton[locale]}
                <Arrow width={14} height={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-dim">
        {calculator.disclaimer[locale]}
      </p>
    </div>
  );
}
