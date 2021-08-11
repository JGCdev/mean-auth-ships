import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  // TO-DO - Transform api calls to mockups
  let randomEmail = 'email' + Math.floor(Math.random() * 10000); + '@gmail.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
    });
    service = TestBed.inject(AuthService);
    service.endpoint = 'http://server:8000/api/auth';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return unauthorized user',
    (done: DoneFn) => {
    service.login({username: 'fakeuser', password: 'fakepassword'}).subscribe(
      value => {
        done();
      },
      err => {
        let responseError = {message: 'Authentication failed' };
        expect(err.error).toEqual(responseError);
        done();
      }
    );
  });

  it('should register user',
    (done: DoneFn) => {
    service.register({username: 'testuser', password: 'fakepassword', email: randomEmail, firstname: 'testuser', lastname: 'testuser'})
    .subscribe( value => {
        let response = 'User successfully created!';
        expect(value.message).toEqual(response);
        done();
    });
  });

  it('should login user',
    (done: DoneFn) => {
    service.login({username: 'testuser', password: 'fakepassword'})
    .subscribe(
      value => {
        expect(value.token).toBeDefined();
        done();
      }
    );
  });

});
