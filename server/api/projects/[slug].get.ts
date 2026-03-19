export default defineEventHandler(async (event) => {
  const { api_url } = useRuntimeConfig().public

  const slug = getRouterParam(event, "slug")

  try {
    const response = await $fetch(`${api_url}/api/v1/videos/${slug}`)

    return response
  } catch (error) {
    console.error("Error:", error)
    return null
  }
})
