import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

/* How to Call the method
AuthenticationService.register({
  email: "testing@gmail.com",
  password: "12345"
})
*/
