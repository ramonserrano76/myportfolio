"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[592],{928:(h,p,e)=>{e.d(p,{U:()=>M});var g=e(5861),r=e(2382),m=e(6223),t=e(1223),d=e(1135);let i=(()=>{class o{constructor(){this.userSubject=new d.X(null),this.setUser()}signIn(n){throw new Error("Method not implemented.")}signUp(n){throw new Error("Method not implemented.")}get user$(){return this.userSubject.asObservable()}setUser(){const n=localStorage.getItem(m.y);this.userSubject.next(n)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var u=e(6858),f=e(2290),x=e(9808);const v=function(){return["/sign-up"]};function b(o,l){1&o&&(t.ynx(0),t.TgZ(1,"a",14),t._uU(2,"Create new account"),t.qZA(),t.BQk()),2&o&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,v)))}const _=function(){return["/sign-in"]};function C(o,l){1&o&&(t.TgZ(0,"a",14),t._uU(1," Already have an account? "),t.TgZ(2,"small"),t._uU(3,"Sign In here!"),t.qZA()()),2&o&&t.Q6J("routerLink",t.DdM(1,_))}let M=(()=>{class o{constructor(n,a,s,c){this.authSvc=n,this.fb=a,this.router=s,this.toastSvc=c,this.signIn=m.a.signIn}ngOnInit(){this.initForm()}onSubmit(){var n=this;return(0,g.Z)(function*(){const a=n.authForm.value;let s=n.authSvc.signUp(a);n.options.id===m.a.signIn&&(s=n.authSvc.signIn(a));try{const c=s;c.email?n.redirectUser():n.toastSvc.info(c.message,"info")}catch(c){console.log(c)}})()}initForm(){this.authForm=this.fb.group({email:["",r.kI.required],password:["",r.kI.required]})}redirectUser(){this.router.navigate(["/home"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(i),t.Y36(r.QS),t.Y36(u.F0),t.Y36(f._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-form"]],inputs:{options:"options"},decls:22,vars:5,consts:[[1,"auth-form"],[1,"text-center"],[1,"h3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["formControlName","email","type","email","required","","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["formControlName","password","type","password","required","","id","exampleInputPassword1",1,"form-control"],[1,"pass"],[1,"btn-primary","btn--color"],["type","submit",1,"btn","btn-primary"],[4,"ngIf","ngIfElse"],["showSignTemplate",""],[1,"text-black",3,"routerLink"]],template:function(n,a){if(1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h3",2),t._uU(3),t.qZA()(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(5,"div",4)(6,"label",5),t._uU(7,"Email"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",4)(10,"label",7),t._uU(11,"Password"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"div",9),t._uU(14,"Forgot Password?"),t.qZA(),t.TgZ(15,"div",10)(16,"button",11),t._uU(17),t.qZA()(),t.TgZ(18,"div",1),t.YNc(19,b,3,2,"ng-container",12),t.qZA()(),t.YNc(20,C,4,2,"ng-template",null,13,t.W1O),t.qZA()),2&n){const s=t.MAs(21);t.xp6(3),t.Oqu(a.options.label),t.xp6(1),t.Q6J("formGroup",a.authForm),t.xp6(13),t.Oqu(a.options.label),t.xp6(2),t.Q6J("ngIf",a.options.id===a.signIn)("ngIfElse",s)}},dependencies:[x.O5,u.yS,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".auth-form[_ngcontent-%COMP%]{background-color:#f5f5f5e6;padding:1rem;border-radius:10px;width:400px;background:#24303c;margin:50px auto auto;color:#000;box-shadow:7px 13px 37px #000;position:relative;box-shadow:10px 10px 15px #0000000d}.mb-3[_ngcontent-%COMP%]{margin:3rem}.mt-5[_ngcontent-%COMP%]{margin-top:5rem}.text-center[_ngcontent-%COMP%]{text-align:center;padding:20px 0;border-bottom:1px solid silver}.form-label[_ngcontent-%COMP%]{position:relative;top:50%;left:5px;color:#adadad;transform:translateY(-50%);font-size:16px;pointer-events:none;transition:.5s}.pass[_ngcontent-%COMP%]{margin:-5px 0 20px 5px;color:#a6a6a6;cursor:pointer}.pass[_ngcontent-%COMP%]:hover{text-decoration:underline}.text-black[_ngcontent-%COMP%]{margin:30px 0;text-align:center;font-size:16px;color:#666}.text-black[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#2691d9;text-decoration:none}.text-black[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:hover{text-decoration:underline}.auth-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:40px;text-align:center;font-size:18px;line-height:40px}.form-control[_ngcontent-%COMP%]{width:100%;padding:0 5px;height:40px;font-size:16px;border:none;background:white;outline:none}"]}),o})()},9349:(h,p,e)=>{e.d(p,{e:()=>d});var g=e(9808),r=e(6858),m=e(2382),t=e(1223);let d=(()=>{class i{}return i.\u0275fac=function(f){return new(f||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,r.Bz,m.UX]}),i})()}}]);