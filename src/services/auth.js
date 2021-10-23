import axios from "axios"

const url = "http://143.244.154.246:8080"

export const isBrowser = () => typeof window !== "undefined"

export const getSavedPassword = () =>
  isBrowser() && window.sessionStorage.getItem("password")
    ? window.sessionStorage.getItem("password")
    : undefined

const savePassword = password =>
  window.sessionStorage.setItem("password", password)

export const handleLogin = async ({ password }) => {
  return await axios.get(url + "/edoc/authen/" + password).then((response) => {
      if (response.data?.authen === true) {
        savePassword(password)
      }
    }
  )
}

export const isLoggedIn = async () => {
  const password = getSavedPassword()

  return await axios.get(url + "/edoc/authen/" + password).then((response) => {
      return response.data?.authen === true
    }
  )
}

export const logout = callback => {
  savePassword({})
  callback()
}