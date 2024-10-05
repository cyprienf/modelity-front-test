import type { ApiPlan } from '@/models/api-plan'

import { planMocks, errorMocks } from '@/mocks/mocks'
import type { ErrorApiPlan } from '@/models/error-api-plan'

export default class PlanService {
  public static getPlan = async (from: string, to: string): Promise<ApiPlan[]> => {
    console.log(`https://api.backend.com/plan?from=${from}&to=${to}`)

    return planMocks
  }

  public static getPlanErrors = async (from: string, to: string): Promise<ErrorApiPlan> => {
    console.log(`https://api.backend.com/plan?from=${from}&to=${to}`)

    return errorMocks[0]
  }
}
