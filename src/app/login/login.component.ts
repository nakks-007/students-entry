import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { NavigationExtras, Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule, ReactiveFormsModule]
})

export class LoginComponent implements OnInit {

    loginForm!: FormGroup;
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }

    onClickLogin() {
        //Implement Authentication Logic, Send Creds to API for Authentication

        if (this.loginForm.valid) {
            console.log('Form Submitted with ', this.loginForm);
        }

        this.authService.login().subscribe(
            () => {
                if (this.authService.isLoggedIn) {
                    const redirectUrl = '/dashboard';
                    const NavigationExtras: NavigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };

                    this.router.navigate([redirectUrl], NavigationExtras);
                }
            }
        )
    }

}