import{a as Y}from"./chunk-BCRYDC5W.js";import{A as q,B as D,M as L,N as K,a as P,ca as Q,h as y,i as I,j as V,k as O,l as x,m as w,n as $,o as _,p as N,q as p,r as F,s as M,u as k,v as j,w as B,x as T,y as z,z as J}from"./chunk-WRA2O52K.js";import{Ab as d,Bb as g,Cb as h,Hb as v,Jc as C,Nc as U,Rb as a,Tb as A,Wa as s,Xa as c,aa as R,ba as S,fa as G,la as E,ma as b,mb as u,ob as l,yb as o,zb as n}from"./chunk-HZRNHZZ5.js";function se(t,e){t&1&&(o(0,"mat-error"),a(1," Este campo es obligatorio "),n())}function le(t,e){t&1&&(o(0,"mat-error"),a(1," Ingrese un email v\xE1lido "),n())}function pe(t,e){t&1&&(o(0,"mat-error"),a(1," Este campo es obligatorio "),n())}var W=(()=>{let e=class e{constructor(r,i,m,f){this.authService=r,this.fb=i,this.router=m,this.snackBar=f,this.form=this.fb.group({email:["",[p.required,p.email]],password:["",p.required]})}ngOnInit(){}login(){if(this.form.invalid)return;let r=this.form.value;this.authService.login(r).subscribe({next:i=>{this.showSnackBar("Inicio de sesi\xF3n exitoso"),this.router.navigate(["/home"])},error:i=>{console.error("Error en el inicio de sesi\xF3n:",i),this.showSnackBar("Error en el inicio de sesi\xF3n. Por favor, intenta de nuevo.")}})}controlHasError(r,i){return this.form.controls[r].hasError(i)}showSnackBar(r){this.snackBar.open(r,"Cerrar",{duration:3e3})}};e.\u0275fac=function(i){return new(i||e)(c(Y),c(T),c(y),c(L))},e.\u0275cmp=E({type:e,selectors:[["app-login"]],decls:23,vars:5,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"],[1,"row","justify-content-center","my-5"],[1,"col-md-6","col-lg-4"],[3,"ngSubmit","formGroup"],["appearance","outline",1,"mb-3","w-100"],["matInput","","type","email","placeholder","Email","formControlName","email"],[4,"ngIf"],["matInput","","type","password","placeholder","Contrase\xF1a","formControlName","password"],["type","submit","mat-raised-button","","color","primary",1,"w-100",3,"disabled"],[1,"mt-3","text-center"],["routerLink","/signup",1,"ms-2"]],template:function(i,m){i&1&&(o(0,"div",0)(1,"h1",1),a(2,"Inicio de sesi\xF3n"),n(),o(3,"div",2)(4,"div",3)(5,"form",4),v("ngSubmit",function(){return m.login()}),o(6,"mat-form-field",5)(7,"mat-label"),a(8,"Email"),n(),d(9,"input",6),u(10,se,2,0,"mat-error",7)(11,le,2,0,"mat-error",7),n(),o(12,"mat-form-field",5)(13,"mat-label"),a(14,"Contrase\xF1a"),n(),d(15,"input",8),u(16,pe,2,0,"mat-error",7),n(),o(17,"button",9),a(18," Ingresar "),n(),o(19,"div",10),a(20," A\xFAn no tienes una cuenta? "),o(21,"a",11),a(22," Reg\xEDstrate aqu\xED "),n()()()()()()),i&2&&(s(5),l("formGroup",m.form),s(5),l("ngIf",m.controlHasError("email","required")),s(),l("ngIf",m.controlHasError("email","email")),s(5),l("ngIf",m.controlHasError("password","required")),s(),l("disabled",m.form.invalid))},dependencies:[C,I,k,N,F,M,j,B,_,q,x,w,D]});let t=e;return t})();var X=(()=>{let e=class e{constructor(r){this.http=r,this.baseUrl=O.apiUrl}signUp(r){let i=`${this.baseUrl}/customers`;return this.http.post(i,r)}};e.\u0275fac=function(i){return new(i||e)(G(P))},e.\u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ue(t,e){t&1&&(o(0,"mat-error"),a(1," Este campo es obligatorio "),n())}function de(t,e){t&1&&(o(0,"mat-error"),a(1," Este campo es obligatorio "),n())}function fe(t,e){t&1&&(g(0),a(1," Este campo es obligatorio "),h())}function ge(t,e){t&1&&(g(0),a(1," Ingrese un email v\xE1lido "),h())}function he(t,e){t&1&&(g(0),a(1," Este campo es obligatorio "),h())}function ve(t,e){t&1&&(g(0),a(1," Ingrese una contrase\xF1a de al menos 4 caracteres. "),h())}var Z=(()=>{let e=class e{constructor(r,i,m,f){this.fb=r,this.router=i,this.snackBar=m,this.signUpService=f,this.passwordVisible=!1,this.form=this.fb.group({firstName:["",[p.required]],lastName:["",[p.required]],email:["",[p.required,p.email]],password:["",[p.required,p.minLength(4)]]})}controlHasError(r,i){return this.form.controls[r].hasError(i)}signup(){if(this.form.invalid)return;let r=this.form.value;this.signUpService.signUp(r).subscribe({next:i=>{this.showSnackBar("Registro exitoso"),this.router.navigate(["home"])},error:i=>{console.error("Error en el registro:",i),this.showSnackBar("Error en el registro. Por favor, intenta de nuevo.")}})}showSnackBar(r){this.snackBar.open(r,"Cerrar",{duration:3e3})}};e.\u0275fac=function(i){return new(i||e)(c(T),c(y),c(L),c(X))},e.\u0275cmp=E({type:e,selectors:[["app-signup"]],decls:39,vars:10,consts:[[1,"container","py-5"],[1,"fw-bold","text-center"],[1,"row","justify-content-center","my-5"],[1,"col-md-6","col-lg-4"],["autocomplete","off",1,"mt-5",3,"ngSubmit","formGroup"],["appearance","outline",1,"mb-2","w-100"],["matInput","","type","text","placeholder","Nombres","formControlName","firstName"],[4,"ngIf"],["matInput","","type","text","placeholder","Apellidos","formControlName","lastName"],["matInput","","type","text","placeholder","Correo electr\xF3nico","formControlName","email"],["matInput","","placeholder","Contrase\xF1a","formControlName","password",3,"type"],["matSuffix","",3,"click"],[1,"text-end"],["mat-raised-button","","color","primary",1,"w-100",3,"disabled"],[1,"mt-3","text-center"],["routerLink","/",1,"ms-2"]],template:function(i,m){i&1&&(o(0,"div",0)(1,"h1",1),a(2,"Registro de usuario"),n(),o(3,"div",2)(4,"div",3)(5,"form",4),v("ngSubmit",function(){return m.signup()}),o(6,"mat-form-field",5)(7,"mat-label"),a(8,"Nombres"),n(),d(9,"input",6),u(10,ue,2,0,"mat-error",7),n(),o(11,"mat-form-field",5)(12,"mat-label"),a(13,"Apellidos"),n(),d(14,"input",8),u(15,de,2,0,"mat-error",7),n(),o(16,"mat-form-field",5)(17,"mat-label"),a(18,"Correo electr\xF3nico"),n(),d(19,"input",9),o(20,"mat-error"),u(21,fe,2,0,"ng-container",7)(22,ge,2,0,"ng-container",7),n()(),o(23,"mat-form-field",5)(24,"mat-label"),a(25,"Contrase\xF1a"),n(),d(26,"input",10),o(27,"mat-icon",11),v("click",function(){return m.passwordVisible=!m.passwordVisible}),a(28),n(),o(29,"mat-error"),u(30,he,2,0,"ng-container",7)(31,ve,2,0,"ng-container",7),n()(),o(32,"div",12)(33,"button",13),a(34," Registrarme "),n(),o(35,"div",14),a(36," \xBFYa tienes una cuenta? "),o(37,"a",15),a(38," Inicia sesi\xF3n "),n()()()()()()()),i&2&&(s(5),l("formGroup",m.form),s(5),l("ngIf",m.controlHasError("firstName","required")),s(5),l("ngIf",m.controlHasError("lastName","required")),s(6),l("ngIf",m.controlHasError("email","required")),s(),l("ngIf",m.controlHasError("email","pattern")),s(4),l("type",m.passwordVisible?"text":"password"),s(2),A(" ",m.passwordVisible?"visibility_off":"visibility"," "),s(2),l("ngIf",m.controlHasError("password","required")),s(),l("ngIf",m.controlHasError("password","minlength")),s(2),l("disabled",!m.form.valid))},dependencies:[C,I,k,N,F,M,j,B,_,q,x,w,$,D,K]});let t=e;return t})();var Se=[{path:"",component:W},{path:"signup",component:Z}],ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=S({imports:[V.forChild(Se),V]});let t=e;return t})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=b({type:e}),e.\u0275inj=S({imports:[U,ee,z,J,Q]});let t=e;return t})();export{Ue as UserModule};