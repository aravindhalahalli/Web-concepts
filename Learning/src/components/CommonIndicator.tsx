import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Stage } from '../types/CommonTypes';

interface CommonIndicatorProps {
  stages: Stage[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CommonIndicator: React.FC<CommonIndicatorProps> = ({ stages }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {stages.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== stages.length - 1 ? 'pr-2 sm:pr-2' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-green-700" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-green-600 bg-white hover:border-green-900"
                >
                  <CheckIcon className="h-4 w-4 text-green-900 font-bold" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'failed' ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-700 bg-white"
                  aria-current="step"
                >
                  <XMarkIcon className="h-4 w-4 text-red-900 font-bold" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                  aria-current="step"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-300" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default CommonIndicator;
