import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  errorMsg: string | null = null

  handleAuthenticationErrors(err: HttpErrorResponse) {
    if (err.error || err.error.error) {
      this.errorMsg = 'Problem encountered while connecting to the server'
      return throwError(() => this.errorMsg)
    }

    switch (err.error.error.message) {
      case 'CLAIMS_TOO_LARGE':
        this.errorMsg = 'Claims too large'
        break

      case 'EMAIL_ALREADY_EXISTS':
        this.errorMsg = 'Email already taken'
        break

      case 'EMAIL_EXISTS':
        this.errorMsg = 'Email already taken'
        break

      case 'ID_TOKEN_EXPIRED':
        this.errorMsg = 'Time out error'
        break

      case 'ID_TOKEN_REVOKED':
        this.errorMsg = 'Revoked'
        break

      case 'INSUFFICIENT_PERMISSION':
        this.errorMsg = 'Insufficient permissions'
        break

      case 'INTERNAL_ERROR':
        this.errorMsg = 'Internal error'
        break

      case 'INVALID_CLAIMS':
        this.errorMsg = 'Invalid claims'
        break

      case 'INVALID_CONTINUE_URI':
        this.errorMsg = 'Problem with redirect URL'
        break

      case 'INVALID_CREATION_TIME':
        this.errorMsg = 'Check your time settings'
        break

      case 'INVALID_CREDENTIAL':
        this.errorMsg = 'Wrong credential/s'
        break

      case 'INVALID_DISABLED_FIELD':
        this.errorMsg = 'Invalid disabled field/s'
        break

      case 'INVALID_DISPLAY_NAME':
        this.errorMsg = 'Invalid display time'
        break

      case 'INVALID_DYNAMIC_LINK_DOMAIN':
        this.errorMsg = 'Invalid dynamic link domain'
        break

      case 'INVALID_EMAIL':
        this.errorMsg = 'Check the email that you have provided'
        break

      case 'INVALID_EMAIL_VERIFIED':
        this.errorMsg = 'Email verification error'
        break

      case 'INVALID_HASH_ALGORITHM':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_BLOCK_SIZE':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_DERIVED_KEY_LENGTH':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_KEY':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_MEMORY_COST':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_PARALLELIZATION':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_ROUNDS':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_HASH_SALT_SEPARATOR':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_ID_TOKEN':
        this.errorMsg = 'Authentication error'
        break

      case 'INVALID_LAST_SIGN_IN_TIME':
        this.errorMsg = 'Wrong last-signin-time'
        break

      case 'INVALID_LOGIN_CREDENTIALS':
        this.errorMsg = 'Your crdentials are faulty'
        break

      case 'INVALID_PAGE_TOKEN':
        this.errorMsg = 'Page access error'
        break

      case 'INVALID_PASSWORD':
        this.errorMsg = 'Check your password'
        break

      case 'INVALID_PASSWORD_HASH':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_PASSWORD_SALT':
        this.errorMsg = 'Server error'
        break

      case 'INVALID_PHONE_NUMBER':
        this.errorMsg = 'Correct the phone number you  have provided'
        break

      case 'INVALID_PHOTO_URL':
        this.errorMsg = 'Wrong photo-url'
        break

      case 'INVALID_PROVIDER_DATA':
        this.errorMsg = 'Wrong provider data'
        break

      case 'INVALID_PROVIDER_ID':
        this.errorMsg = 'Wrong provider ID'
        break

      case 'INVALID_OAUTH_RESPONSETYPE':
        this.errorMsg = 'Wrong OAuth reponseType'
        break

      case 'INVALID_SESSION_COOKIE_DURATION':
        this.errorMsg = 'Session duration error'
        break

      case 'INVALID_UID':
        this.errorMsg = 'Invalid user Id'
        break

      case 'INVALID_USER_IMPORT':
        this.errorMsg = 'Invalid user import'
        break

      case 'MAXIMUM_USER_COUNT_EXCEEDED':
        this.errorMsg = 'User count exceeded'
        break

      case 'MISSING_CONTINUE_URI':
        this.errorMsg = 'Missing redirection URI'
        break

      case 'MISSING_HASH_ALGORITHM':
        this.errorMsg = 'Server error'
        break

      case 'MISSING_UID':
        this.errorMsg = 'Missing user Id'
        break

      case 'MISSING_OAUTH_CLIENT_SECRET':
        this.errorMsg = 'Missing OAuth client secret'
        break

      case 'OPERATION_NOT_ALLOWED':
        this.errorMsg = 'Operation not allowed'
        break

      case 'PHONE_NUMBER_ALREADY_EXISTS':
        this.errorMsg = 'Phone number already taken'
        break

      case 'PROJECT_NOT_FOUND':
        this.errorMsg = 'Asset not found'
        break

      case 'RESERVED_CLAIMS':
        this.errorMsg = 'Reserved claims access error'
        break

      case 'SESSION_COOKIE_EXPIRED':
        this.errorMsg = 'Session timed out'
        break

      case 'SESSION_COOKIE_REVOKED':
        this.errorMsg = 'Session revoked'
        break

      case 'TOO_MANY_REQUESTS':
        this.errorMsg = 'Too many requests'
        break

      case 'UID_ALREADY_EXISTS':
        this.errorMsg = 'User Id already taken'
        break

      case 'UNAUTHORIZED_CONTINUE_URI':
        this.errorMsg = 'Unauthorized redirection'
        break

      case 'USER_DISABLED':
        this.errorMsg = 'User disabled'
        break

      case 'USER_NOT_FOUND':
        this.errorMsg = 'User not found'
        break

      default:
        console.log(err.error.error.message)
        this.errorMsg = 'Unknown error from server'
    }

    return throwError(() => this.errorMsg)
  }
}
