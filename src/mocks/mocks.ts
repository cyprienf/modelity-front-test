import type { ApiPlan } from '@/models/api-plan'
import type { ErrorApiPlan } from '@/models/error-api-plan'

const firstPlan: ApiPlan = {
  color: '#5394cf',
  total_duration_s: 720,
  path: [
    [45.760520956041326, 4.858194774687109],
    [45.76326674486923, 4.8573960638766405],
    [45.76294867125261, 4.853999013623984],
    [45.76271123483556, 4.853960483753443]
  ]
}

const secondPlan: ApiPlan = {
  color: '#eb1313',
  total_duration_s: 900,
  path: [
    [45.760520956041326, 4.858194774687109],
    [45.76326674486923, 4.8573960638766405],
    [45.76371014451072, 4.857331442515598],
    [45.76367146935712, 4.853486088466856],
    [45.762929853189725, 4.853630308737542],
    [45.76294867125261, 4.853999013623984],
    [45.76271123483556, 4.853960483753443]
  ]
}

const firstErrorPlan: ErrorApiPlan = {
  error: 'An error has occurred, please try again later'
}

export const ErrorMocks: ErrorApiPlan[] = [firstErrorPlan]
export const planMocks: ApiPlan[] = [firstPlan, secondPlan]
