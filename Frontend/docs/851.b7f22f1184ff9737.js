"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[851],{2328:(Oe,S,l)=>{l.d(S,{U:()=>y});var o=l(5861),f=l(2382),E=l(6223),a=(l(2891),l(1223)),_=l(2184),O=l(6342),G=l(2290),ee=l(9808);const te=function(){return["/sign-up"]};function ne(d,F){1&d&&(a.ynx(0),a.TgZ(1,"a",14),a._uU(2,"Create new account"),a.qZA(),a.BQk()),2&d&&(a.xp6(1),a.Q6J("routerLink",a.DdM(1,te)))}const re=function(){return["/sign-in"]};function k(d,F){1&d&&(a.TgZ(0,"a",14),a._uU(1," Already have an account? "),a.TgZ(2,"small"),a._uU(3,"Sign In here!"),a.qZA()()),2&d&&a.Q6J("routerLink",a.DdM(1,re))}let y=(()=>{class d{constructor(c,m,v,C){this.authSvc=c,this.fb=m,this.router=v,this.toastSvc=C,this.signIn=E.a.signIn}ngOnInit(){this.initForm()}onSubmit(){var c=this;return(0,o.Z)(function*(){const m=c.authForm.value;let v=c.authSvc.signUp(m);c.options.id===E.a.signIn&&(v=c.authSvc.signIn(m));try{const C=yield v;C.email?c.redirectUser():c.toastSvc.info(C.message,"info")}catch(C){console.log(C)}})()}initForm(){this.authForm=this.fb.group({email:["",f.kI.required],password:["",f.kI.required]})}redirectUser(){this.router.navigate(["/home"])}}return d.\u0275fac=function(c){return new(c||d)(a.Y36(_.e),a.Y36(f.qu),a.Y36(O.F0),a.Y36(G._W))},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-form"]],inputs:{options:"options"},decls:22,vars:5,consts:[[1,"auth-form"],[1,"text-center"],[1,"h3"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["formControlName","email","type","email","required","","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control"],["for","exampleInputPassword1",1,"form-label"],["formControlName","password","type","password","required","","id","exampleInputPassword1",1,"form-control"],[1,"pass"],[1,"btn-primary","btn--color"],["type","submit",1,"btn","btn-primary"],[4,"ngIf","ngIfElse"],["showSignTemplate",""],[1,"text-black",3,"routerLink"]],template:function(c,m){if(1&c&&(a.TgZ(0,"section",0)(1,"div",1)(2,"h3",2),a._uU(3),a.qZA()(),a.TgZ(4,"form",3),a.NdJ("ngSubmit",function(){return m.onSubmit()}),a.TgZ(5,"div",4)(6,"label",5),a._uU(7,"Email"),a.qZA(),a._UZ(8,"input",6),a.qZA(),a.TgZ(9,"div",4)(10,"label",7),a._uU(11,"Password"),a.qZA(),a._UZ(12,"input",8),a.qZA(),a.TgZ(13,"div",9),a._uU(14,"Forgot Password?"),a.qZA(),a.TgZ(15,"div",10)(16,"button",11),a._uU(17),a.qZA()(),a.TgZ(18,"div",1),a.YNc(19,ne,3,2,"ng-container",12),a.qZA()(),a.YNc(20,k,4,2,"ng-template",null,13,a.W1O),a.qZA()),2&c){const v=a.MAs(21);a.xp6(3),a.Oqu(m.options.label),a.xp6(1),a.Q6J("formGroup",m.authForm),a.xp6(13),a.Oqu(m.options.label),a.xp6(2),a.Q6J("ngIf",m.options.id===m.signIn)("ngIfElse",v)}},directives:[f._Y,f.JL,f.sg,f.Fj,f.JJ,f.u,f.Q7,ee.O5,O.yS],styles:[".auth-form[_ngcontent-%COMP%]{background-color:#f5f5f5e6;padding:1rem;border-radius:10px;width:400px;background:#24303c;margin:50px auto auto;color:#000;box-shadow:7px 13px 37px #000;position:relative;box-shadow:10px 10px 15px #0000000d}.mb-3[_ngcontent-%COMP%]{margin:3rem}.mt-5[_ngcontent-%COMP%]{margin-top:5rem}.text-center[_ngcontent-%COMP%]{text-align:center;padding:20px 0;border-bottom:1px solid silver}.form-label[_ngcontent-%COMP%]{position:relative;top:50%;left:5px;color:#adadad;transform:translateY(-50%);font-size:16px;pointer-events:none;transition:.5s}.pass[_ngcontent-%COMP%]{margin:-5px 0 20px 5px;color:#a6a6a6;cursor:pointer}.pass[_ngcontent-%COMP%]:hover{text-decoration:underline}.text-black[_ngcontent-%COMP%]{margin:30px 0;text-align:center;font-size:16px;color:#666}.text-black[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#2691d9;text-decoration:none}.text-black[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:hover{text-decoration:underline}.auth-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{height:40px;text-align:center;font-size:18px;line-height:40px}.form-control[_ngcontent-%COMP%]{width:100%;padding:0 5px;height:40px;font-size:16px;border:none;background:white;outline:none}"]}),d})()},9349:(Oe,S,l)=>{l.d(S,{e:()=>a});var o=l(9808),f=l(6342),E=l(2382),x=l(1223);let a=(()=>{class _{}return _.\u0275fac=function(G){return new(G||_)},_.\u0275mod=x.oAB({type:_}),_.\u0275inj=x.cJS({imports:[[o.ez,f.Bz,E.UX]]}),_})()},2382:(Oe,S,l)=>{l.d(S,{Fj:()=>R,qu:()=>On,u:()=>Me,sg:()=>K,JJ:()=>Ke,JL:()=>Qe,UX:()=>Gt,Q7:()=>Q,kI:()=>Bt,_Y:()=>gt});var o=l(1223),f=l(9808),E=l(8306),x=l(4742),a=l(8421),_=l(7669),O=l(5403),G=l(3268),ee=l(1810),ne=l(2076),re=l(4004);let k=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),y=(()=>{class n extends k{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const d=new o.OlP("NgValueAccessor"),m={provide:d,useExisting:(0,o.Gpc)(()=>R),multi:!0},C=new o.OlP("CompositionEventMode");let R=(()=>{class n extends k{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function v(){const n=(0,f.q)()?(0,f.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(C,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([m]),o.qOj]}),n})();function V(n){return null==n||0===n.length}function Fe(n){return null!=n&&"number"==typeof n.length}const h=new o.OlP("NgValidators"),A=new o.OlP("NgAsyncValidators"),Pt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Bt{static min(t){return function we(n){return t=>{if(V(t.value)||V(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function Ne(n){return t=>{if(V(t.value)||V(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return Se(t)}static requiredTrue(t){return function xe(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ge(n){return V(n.value)||Pt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Pe(n){return t=>V(t.value)||!Fe(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Be(n){return t=>Fe(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Ie(n){if(!n)return U;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(V(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return He(t)}static composeAsync(t){return Le(t)}}function Se(n){return V(n.value)?{required:!0}:null}function U(n){return null}function Te(n){return null!=n}function ke(n){const t=(0,o.QGY)(n)?(0,ne.D)(n):n;return(0,o.CqO)(t),t}function Re(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Ue(n,t){return t.map(e=>e(n))}function je(n){return n.map(t=>function It(n){return!n.validate}(t)?t:e=>t.validate(e))}function He(n){if(!n)return null;const t=n.filter(Te);return 0==t.length?null:function(e){return Re(Ue(e,t))}}function oe(n){return null!=n?He(je(n)):null}function Le(n){if(!n)return null;const t=n.filter(Te);return 0==t.length?null:function(e){return function te(...n){const t=(0,_.jO)(n),{args:e,keys:r}=(0,x.D)(n),i=new E.y(s=>{const{length:u}=e;if(!u)return void s.complete();const g=new Array(u);let b=u,N=u;for(let X=0;X<u;X++){let Ee=!1;(0,a.Xf)(e[X]).subscribe((0,O.x)(s,Fn=>{Ee||(Ee=!0,N--),g[X]=Fn},()=>b--,void 0,()=>{(!b||!Ee)&&(N||s.next(r?(0,ee.n)(r,g):g),s.complete())}))}});return t?i.pipe((0,G.Z)(t)):i}(Ue(e,t).map(ke)).pipe((0,re.U)(Re))}}function ie(n){return null!=n?Le(je(n)):null}function qe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ye(n){return n._rawValidators}function We(n){return n._rawAsyncValidators}function se(n){return n?Array.isArray(n)?n:[n]:[]}function j(n,t){return Array.isArray(n)?n.includes(t):n===t}function $e(n,t){const e=se(t);return se(n).forEach(i=>{j(e,i)||e.push(i)}),e}function ze(n,t){return se(t).filter(e=>!j(n,e))}class Ze{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ie(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class M extends Ze{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class p extends Ze{get formDirective(){return null}get path(){return null}}class Je{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}let Ke=(()=>{class n extends Je{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(M,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Qe=(()=>{class n extends Je{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function P(n,t){ue(n,t),t.valueAccessor.writeValue(n.value),function qt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&et(n,t)})}(n,t),function Wt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Yt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&et(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Lt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function q(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),W(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Y(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ue(n,t){const e=Ye(n);null!==t.validator?n.setValidators(qe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=We(n);null!==t.asyncValidator?n.setAsyncValidators(qe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();Y(t._rawValidators,i),Y(t._rawAsyncValidators,i)}function W(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ye(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(u=>u!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=We(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(u=>u!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return Y(t._rawValidators,r),Y(t._rawAsyncValidators,r),e}function et(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function he(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const B="VALID",$="INVALID",w="PENDING",I="DISABLED";function pe(n){return(z(n)?n.validators:n)||null}function ot(n){return Array.isArray(n)?oe(n):n||null}function ge(n,t){return(z(t)?t.asyncValidators:n)||null}function it(n){return Array.isArray(n)?ie(n):n||null}function z(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const me=n=>n instanceof ye,Z=n=>n instanceof J,st=n=>n instanceof dt;function at(n){return me(n)?n.value:n.getRawValue()}function lt(n,t){const e=Z(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function ut(n,t){Z(n),n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class _e{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=ot(this._rawValidators),this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===B}get invalid(){return this.status===$}get pending(){return this.status==w}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=ot(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=it(t)}addValidators(t){this.setValidators($e(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators($e(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ze(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ze(t,this._rawAsyncValidators))}hasValidator(t){return j(this._rawValidators,t)}hasAsyncValidator(t){return j(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=w,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=B,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===w)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=w,this._hasOwnPendingAsyncValidator=!0;const e=ke(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function Jt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=Z(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:st(r)&&r.at(i)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?$:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(w)?w:this._anyControlsHaveStatus($)?$:B}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){z(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ye extends _e{constructor(t=null,e,r){super(pe(e),ge(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){he(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){he(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class J extends _e{constructor(t,e,r){super(pe(e),ge(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){ut(this,t),Object.keys(t).forEach(r=>{lt(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=at(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class dt extends _e{constructor(t,e,r){super(pe(e),ge(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){ut(this,t),t.forEach((r,i)=>{lt(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>at(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),_t=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const Ce=new o.OlP("NgModelWithFormControlWarning"),sn={provide:p,useExisting:(0,o.Gpc)(()=>K)};let K=(()=>{class n extends p{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(W(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return P(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){q(e.control||null,e,!1),he(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function rt(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(q(r||null,e),me(i)&&(P(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function tt(n,t){ue(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function $t(n,t){return W(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ue(this.form,this),this._oldForm&&W(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(h,10),o.Y36(A,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([sn]),o.qOj,o.TTD]}),n})();const un={provide:M,useExisting:(0,o.Gpc)(()=>Me)};let Me=(()=>{class n extends M{constructor(e,r,i,s,u){super(),this._ngModelWarningConfig=u,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ce(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===R?e=s:function Zt(n){return Object.getPrototypeOf(n.constructor)===y}(s)?r=s:i=s}),i||r||e||null}(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),function de(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function L(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(p,13),o.Y36(h,10),o.Y36(A,10),o.Y36(d,10),o.Y36(Ce,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([un]),o.qOj,o.TTD]}),n})(),D=(()=>{class n{constructor(){this._validator=U}ngOnChanges(e){if(this.inputName in e){const r=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):U,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return null!=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,features:[o.TTD]}),n})();const vn={provide:h,useExisting:(0,o.Gpc)(()=>Q),multi:!0};let Q=(()=>{class n extends D{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=e=>function mn(n){return null!=n&&!1!==n&&"false"!=`${n}`}(e),this.createValidator=e=>Se}enabled(e){return e}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r._enabled?"":null)},inputs:{required:"required"},features:[o._Bn([vn]),o.qOj]}),n})(),bn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[_t]]}),n})(),Gt=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Ce,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[bn]}),n})(),On=(()=>{class n{group(e,r=null){const i=this._reduceControls(e);let g,s=null,u=null;return null!=r&&(function En(n){return void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn}(r)?(s=null!=r.validators?r.validators:null,u=null!=r.asyncValidators?r.asyncValidators:null,g=null!=r.updateOn?r.updateOn:void 0):(s=null!=r.validator?r.validator:null,u=null!=r.asyncValidator?r.asyncValidator:null)),new J(i,{asyncValidators:u,updateOn:g,validators:s})}control(e,r,i){return new ye(e,r,i)}array(e,r,i){const s=e.map(u=>this._createControl(u));return new dt(s,r,i)}_reduceControls(e){const r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){return me(e)||Z(e)||st(e)?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:Gt}),n})()}}]);