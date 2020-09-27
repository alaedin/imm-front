import {Component, OnInit} from '@angular/core';
import {SingUpForm} from '../../../model/sing-up-form';
import {FormControl, Validators} from '@angular/forms';
import {RoleService} from '../../../services/role/role.service';
import {Role} from '../../../entity/role';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {MatSnackBarComponent} from '../../utils/mat-snack-bar/mat-snack-bar.component';
import {AuthService} from '../../../config/auth-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  singUpForm: SingUpForm = new SingUpForm();
  roles: Role[] = [];
  selectedRole: number;
  submitted: boolean;
  role: any;


  constructor(private roleService: RoleService,
              private userService: AuthService,
              private router: Router,
              private snackBar: MatSnackBarComponent) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
    this.getAllRole();
  }

  getAllRole(): void {
    this.roleService.getAll()
      .subscribe(
        data => {
          this.roles = data.body;
        },
        error => {
          console.log(error);
        });
  }

  signIn = () => {
    this.singUpForm.email = this.emailFormControl.value;
    this.singUpForm.role.push(this.selectedRole);
    console.log(JSON.stringify(this.singUpForm));
    this.userService.signUp(this.singUpForm)
      .subscribe(
        response => {

          console.log(response);
          this.submitted = true;
          this.router.navigate(['/connexion']);
          this.snackBar.openSnackBar(this.singUpForm.username + ' registered successfully!!', 'Close', 'success-snackbar');
          interval(3000).subscribe(x => {
            location.reload();
          });

        },
        error => {
          this.snackBar.openSnackBar(error.error.message, 'Close', 'error-snackbar');

          console.log(error);
        }
      );

  }

}
