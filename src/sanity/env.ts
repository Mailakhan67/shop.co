export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skttZQg1d7yTQ0E1J8BlB5MK3EeAwDa6SqVocaBN9NIl0NTIvAhC3f3l6sZUi9gkSpkndg6xopWuirRfUYIA9SDPAY6NkPFJPXZjvt8gEUBixfFfJcV3NrTivoGffwtKQeYFKt9R8nOuYOWN0nJHZsGwUZuI7SwKKEtZdt1xXea0JcLLya6T",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
