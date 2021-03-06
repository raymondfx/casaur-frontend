/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import {HomeComponent} from './home/home.component';
import {VerifyCertificateComponent} from './verify-certificate/verify-certificate.component';
import {CertificateTemplateComponent} from './CertificateTemplate/CertificateTemplate.component';
import {AddRosterComponent} from './AddRoster/AddRoster.component';
import {IssueCertificatesComponent} from './IssueCertificates/IssueCertificates.component';
import {AuthCallbackComponent} from './auth/auth-callback/auth-callback.component';
import {AuthSignupComponent} from './auth/auth-signup/auth-signup.component';
import {SelectTypeComponent} from './SelectType/SelectType.component'

const routes: Routes = [
	// { path: 'transaction', component: TransactionComponent },
	{path: '', component: HomeComponent},
	{path: 'certificate-templates', component: CertificateTemplateComponent},
	{path: 'issue-certificates', component: IssueCertificatesComponent},
	{path: 'select-type', component: SelectTypeComponent},
	{path: 'add-roster', component: AddRosterComponent},
	{path: 'verify-certificate', component: VerifyCertificateComponent},
	{path: 'callback', component: AuthCallbackComponent},
	{path: 'signup', component: AuthSignupComponent},
	{path: '**', redirectTo: ''}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {
}
