import React from "react";

export default function Ingredients({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">
        Ingredients
      </legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {ingredients.map((instruction, instructionIdx) => (
          <div key={instructionIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label
                htmlFor={`instruction-${instruction}`}
                className="select-none font-medium text-gray-900"
              >
                {instruction}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`instruction-${instruction}`}
                name={`instruction-${instruction}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
