"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[351],{491:(Fe,B,l)=>{function o(d,y,u,h,_,p,O){try{var v=d[p](O),b=v.value}catch(f){return void u(f)}v.done?y(b):Promise.resolve(b).then(h,_)}l.d(B,{U:()=>C});var m=l(2382),D=l(6223),a=l(1223),A=l(1135);let I=(()=>{class d{constructor(){this.userSubject=new A.X(null),this.setUser()}signIn(u){throw new Error("Method not implemented.")}signUp(u){throw new Error("Method not implemented.")}get user$(){return this.userSubject.asObservable()}setUser(){const u=localStorage.getItem(D.y);this.userSubject.next(u)}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275prov=a.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var x=l(6858),re=l(2290),oe=l(9808);const ie=function(){return["/sign-up"]};function se(d,y){1&d&&(a.ynx(0),a.TgZ(1,"a",14),a._uU(2,"Create new account"),a.qZA(),a.BQk()),2&d&&(a.xp6(1),a.Q6J("routerLink",a.DdM(1,ie)))}const L=function(){return["/sign-in"]};function M(d,y){1&d&&(a.TgZ(0,"a",14),a._uU(1," Already have an account? "),a.TgZ(2,"small"),a._uU(3,"Sign In here!"),a.qZA()()),2&d&&a.Q6J("routerLink",a.DdM(1,L))}let C=(()=>{class d{constructor(u,h,_,p){this.authSvc=u,this.fb=h,this.router=_,this.toastSvc=p,this.signIn=D.a.signIn}ngOnInit(){this.initForm()}onSubmit(){var u=this;return function S(d){return function(){var y=this,u=arguments;return new Promise(function(h,_){var p=d.apply(y,u);function O(b){o(p,h,_,O,v,"next",b)}function v(b){o(p,h,_,O,v,"throw",b)}O(void 0)})}}(function*(){const h=u.authForm.value;let _=u.authSvc.signUp(h);u.options.id===D.a.signIn&&(_=u.authSvc.signIn(h));try{const p=_;p.email?u.redirectUser():u.toastSvc.info(p.message,"info")}catch(p){console.log(p)}})()}initForm(){this.authForm=this.fb.group({email:["",m.kI.required],password:["",m.kI.required]})}redirectUser(){this.router.navigate(["/home"])}}return d.\u0275fac=function(u){return new(u||d)(a.Y36(I),a.Y36(m.QS),a.Y36(x.F0),a.Y36(re._W))},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-form"]],inputs:{options:"options"},decls:22,vars:5,consts:[[1,"auth-form"],[1,"text-center"],[1,"h3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["formControlName","email","type","email","required","","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["formControlName","password","type","password","required","","id","exampleInputPassword1",1,"form-control"],[1,"pass"],[1,"btn-primary","btn--color"],["type","submit",1,"btn","btn-primary"],[4,"ngIf","ngIfElse"],["showSignTemplate",""],[1,"text-black",3,"routerLink"]],template:function(u,h){if(1&u&&(a.TgZ(0,"section",0)(1,"div",1)(2,"h3",2),a._uU(3),a.qZA()(),a.TgZ(4,"form",3),a.NdJ("ngSubmit",function(){return h.onSubmit()}),a.TgZ(5,"div",4)(6,"label",5),a._uU(7,"Email"),a.qZA(),a._UZ(8,"input",6),a.qZA(),a.TgZ(9,"div",4)(10,"label",7),a._uU(11,"Password"),a.qZA(),a._UZ(12,"input",8),a.qZA(),a.TgZ(13,"div",9),a._uU(14,"Forgot Password?"),a.qZA(),a.TgZ(15,"div",10)(16,"button",11),a._uU(17),a.qZA()(),a.TgZ(18,"div",1),a.YNc(19,se,3,2,"ng-container",12),a.qZA()(),a.YNc(20,M,4,2,"ng-template",null,13,a.W1O),a.qZA()),2&u){const _=a.MAs(21);a.xp6(3),a.Oqu(h.options.label),a.xp6(1),a.Q6J("formGroup",h.authForm),a.xp6(13),a.Oqu(h.options.label),a.xp6(2),a.Q6J("ngIf",h.options.id===h.signIn)("ngIfElse",_)}},dependencies:[oe.O5,x.yS,m._Y,m.Fj,m.JJ,m.JL,m.Q7,m.sg,m.u],styles:[".auth-form[_ngcontent-%COMP%]{background-color:#f5f5f5e6;padding:1rem;border-radius:10px;width:400px;background:#24303c;margin:50px auto auto;color:#000;box-shadow:7px 13px 37px #000;position:relative;box-shadow:10px 10px 15px #0000000d}.mb-3[_ngcontent-%COMP%]{margin:3rem}.mt-5[_ngcontent-%COMP%]{margin-top:5rem}.text-center[_ngcontent-%COMP%]{text-align:center;padding:20px 0;border-bottom:1px solid silver}.form-label[_ngcontent-%COMP%]{position:relative;top:50%;left:5px;color:#adadad;transform:translateY(-50%);font-size:16px;pointer-events:none;transition:.5s}.pass[_ngcontent-%COMP%]{margin:-5px 0 20px 5px;color:#a6a6a6;cursor:pointer}.pass[_ngcontent-%COMP%]:hover{text-decoration:underline}.text-black[_ngcontent-%COMP%]{margin:30px 0;text-align:center;font-size:16px;color:#666}.text-black[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#2691d9;text-decoration:none}.text-black[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:hover{text-decoration:underline}.auth-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:40px;text-align:center;font-size:18px;line-height:40px}.form-control[_ngcontent-%COMP%]{width:100%;padding:0 5px;height:40px;font-size:16px;border:none;background:white;outline:none}"]}),d})()},9349:(Fe,B,l)=>{l.d(B,{e:()=>a});var o=l(9808),S=l(6858),m=l(2382),D=l(1223);let a=(()=>{class A{}return A.\u0275fac=function(x){return new(x||A)},A.\u0275mod=D.oAB({type:A}),A.\u0275inj=D.cJS({imports:[o.ez,S.Bz,m.UX]}),A})()},2382:(Fe,B,l)=>{l.d(B,{Fj:()=>p,u:()=>Ae,sg:()=>ee,JJ:()=>Je,JL:()=>Qe,UX:()=>De,Q7:()=>te,QS:()=>Fn,kI:()=>Bt,_Y:()=>pt});var o=l(1223),S=l(9808),m=l(2076),D=l(9751),a=l(4742),A=l(8421),I=l(7669),x=l(5403),re=l(3268),oe=l(1810),se=l(4004);let L=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),M=(()=>{class n extends L{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const C=new o.OlP("NgValueAccessor"),u={provide:C,useExisting:(0,o.Gpc)(()=>p),multi:!0},_=new o.OlP("CompositionEventMode");let p=(()=>{class n extends L{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function h(){const n=(0,S.q)()?(0,S.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(_,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([u]),o.qOj]}),n})();function v(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function b(n){return null!=n&&"number"==typeof n.length}const f=new o.OlP("NgValidators"),E=new o.OlP("NgAsyncValidators"),Pt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Bt{static min(t){return function Oe(n){return t=>{if(v(t.value)||v(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function we(n){return t=>{if(v(t.value)||v(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return Ne(t)}static requiredTrue(t){return function Se(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function xe(n){return v(n.value)||Pt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ge(n){return t=>v(t.value)||!b(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Pe(n){return t=>b(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Be(n){if(!n)return q;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(v(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Re(t)}static composeAsync(t){return je(t)}}function Ne(n){return v(n.value)?{required:!0}:null}function q(n){return null}function Ie(n){return null!=n}function Te(n){return(0,o.QGY)(n)?(0,m.D)(n):n}function ke(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Ue(n,t){return t.map(e=>e(n))}function He(n){return n.map(t=>function It(n){return!n.validate}(t)?t:e=>t.validate(e))}function Re(n){if(!n)return null;const t=n.filter(Ie);return 0==t.length?null:function(e){return ke(Ue(e,t))}}function ae(n){return null!=n?Re(He(n)):null}function je(n){if(!n)return null;const t=n.filter(Ie);return 0==t.length?null:function(e){return function ie(...n){const t=(0,I.jO)(n),{args:e,keys:r}=(0,a.D)(n),i=new D.y(s=>{const{length:c}=e;if(!c)return void s.complete();const V=new Array(c);let N=c,P=c;for(let ne=0;ne<c;ne++){let Ee=!1;(0,A.Xf)(e[ne]).subscribe((0,x.x)(s,On=>{Ee||(Ee=!0,P--),V[ne]=On},()=>N--,void 0,()=>{(!N||!Ee)&&(P||s.next(r?(0,oe.n)(r,V):V),s.complete())}))}});return t?i.pipe((0,re.Z)(t)):i}(Ue(e,t).map(Te)).pipe((0,se.U)(ke))}}function le(n){return null!=n?je(He(n)):null}function Le(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function qe(n){return n._rawValidators}function Ye(n){return n._rawAsyncValidators}function ue(n){return n?Array.isArray(n)?n:[n]:[]}function Y(n,t){return Array.isArray(n)?n.includes(t):n===t}function We(n,t){const e=ue(t);return ue(n).forEach(i=>{Y(e,i)||e.push(i)}),e}function ze(n,t){return ue(t).filter(e=>!Y(n,e))}class $e{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ae(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class F extends $e{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class g extends $e{get formDirective(){return null}get path(){return null}}class Ze{constructor(t){this._cd=t}get isTouched(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.touched)}get isUntouched(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.untouched)}get isPristine(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.pristine)}get isDirty(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.dirty)}get isValid(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.valid)}get isInvalid(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.invalid)}get isPending(){var t,e;return!(null===(e=null===(t=this._cd)||void 0===t?void 0:t.control)||void 0===e||!e.pending)}get isSubmitted(){var t;return!(null===(t=this._cd)||void 0===t||!t.submitted)}}let Je=(()=>{class n extends Ze{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(F,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Qe=(()=>{class n extends Ze{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const T="VALID",z="INVALID",G="PENDING",k="DISABLED";function fe(n){return($(n)?n.validators:n)||null}function Ke(n){return Array.isArray(n)?ae(n):n||null}function pe(n,t){return($(t)?t.asyncValidators:n)||null}function et(n){return Array.isArray(n)?le(n):n||null}function $(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function tt(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function nt(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class Z{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Ke(this._rawValidators),this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===T}get invalid(){return this.status===z}get pending(){return this.status==G}get disabled(){return this.status===k}get enabled(){return this.status!==k}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Ke(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=et(t)}addValidators(t){this.setValidators(We(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(We(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ze(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ze(t,this._rawAsyncValidators))}hasValidator(t){return Y(this._rawValidators,t)}hasAsyncValidator(t){return Y(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=G,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=k,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=T,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===G)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=G,this._hasOwnPendingAsyncValidator=!0;const e=Te(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(G)?G:this._anyControlsHaveStatus(z)?z:T}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){$(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}}class U extends Z{constructor(t,e,r){super(fe(e),pe(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){nt(this,0,t),Object.keys(t).forEach(r=>{tt(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}class rt extends U{}function H(n,t){var e,r;ge(n,t),t.valueAccessor.writeValue(n.value),n.disabled&&(null===(r=(e=t.valueAccessor).setDisabledState)||void 0===r||r.call(e,!0)),function qt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&ot(n,t)})}(n,t),function Wt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Yt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&ot(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Lt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function Q(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),K(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function X(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ge(n,t){const e=qe(n);null!==t.validator?n.setValidators(Le(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Ye(n);null!==t.asyncValidator?n.setAsyncValidators(Le(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();X(t._rawValidators,i),X(t._rawAsyncValidators,i)}function K(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=qe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(c=>c!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Ye(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(c=>c!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return X(t._rawValidators,r),X(t._rawAsyncValidators,r),e}function ot(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function lt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function ut(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const j=class extends Z{constructor(t=null,e,r){super(fe(e),pe(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=ut(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){lt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){lt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){ut(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let pt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ye=new o.OlP("NgModelWithFormControlWarning"),an={provide:g,useExisting:(0,o.Gpc)(()=>ee)};let ee=(()=>{class n extends g{constructor(e,r){super(),this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(K(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return H(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){Q(e.control||null,e,!1),function Jt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){var r;return this.submitted=!0,function at(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===(null===(r=null==e?void 0:e.target)||void 0===r?void 0:r.method)}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(Q(r||null,e),(n=>n instanceof j)(i)&&(H(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function it(n,t){ge(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function zt(n,t){return K(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ge(this.form,this),this._oldForm&&K(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(f,10),o.Y36(E,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([an]),o.qOj,o.TTD]}),n})();const dn={provide:F,useExisting:(0,o.Gpc)(()=>Ae)};let Ae=(()=>{class n extends F{constructor(e,r,i,s,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function _e(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===p?e=s:function Zt(n){return Object.getPrototypeOf(n.constructor)===M}(s)?r=s:i=s}),i||r||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function me(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function J(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(g,13),o.Y36(f,10),o.Y36(E,10),o.Y36(C,10),o.Y36(ye,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([dn]),o.qOj,o.TTD]}),n})(),w=(()=>{class n{constructor(){this._validator=q}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):q,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const yn={provide:f,useExisting:(0,o.Gpc)(()=>te),multi:!0};let te=(()=>{class n extends w{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=o.D6c,this.createValidator=e=>Ne}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([yn]),o.qOj]}),n})(),Dn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[mt]}),n})(),De=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ye,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Dn]}),n})();class xt extends Z{constructor(t,e,r){super(fe(e),pe(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){nt(this,0,t),t.forEach((r,i)=>{tt(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){var e;return null!==(e=this.at(t))&&void 0!==e?e:null}}function Gt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let En=(()=>{class n{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new n;return e.useNonNullable=!0,e}group(e,r=null){const i=this._reduceControls(e);let s={};return Gt(r)?s=r:null!==r&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new U(i,s)}record(e,r=null){const i=this._reduceControls(e);return new rt(i,r)}control(e,r,i){let s={};return this.useNonNullable?(Gt(r)?s=r:(s.validators=r,s.asyncValidators=i),new j(e,Object.assign(Object.assign({},s),{nonNullable:!0}))):new j(e,r,i)}array(e,r,i){const s=e.map(c=>this._createControl(c));return new xt(s,r,i)}_reduceControls(e){const r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){return e instanceof j||e instanceof Z?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:De}),n})(),Fn=(()=>{class n extends En{group(e,r=null){return super.group(e,r)}control(e,r,i){return super.control(e,r,i)}array(e,r,i){return super.array(e,r,i)}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:De}),n})()}}]);