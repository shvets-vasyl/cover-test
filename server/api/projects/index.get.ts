export default defineEventHandler(async () => {
  const { api_url } = useRuntimeConfig().public

  try {
    const response = await $fetch(`${api_url}/api/v1/videos`)

    return response
  } catch (error) {
    console.error("Error:", error)
    return null
  }
})
