'use client'

import { ReactElement, useState } from "react";

type FormData = {
  stepElement:  ReactElement,
  stepName: string
}

export function useMultistepForm (steps: FormData[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

  function next () {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back () {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo (index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex]?.stepElement,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back,
    goTo
  }
}