export const getUsername = (id: string) =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve(`@name${id}`)
      else reject(new Error('Failed to get username'))
    }, 1000)
  })
