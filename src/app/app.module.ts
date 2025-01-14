import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TimeAgoPipe } from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BlockComponent } from './components/block/block.component';
import { HomeComponent } from './components/home/home.component';

import { TransactionComponent } from './components/transaction/transaction.component';
import { TxListComponent } from './components/tx-list/tx-list.component';
import { TxComponent } from './components/tx/tx.component';
import { AddressComponent } from './components/address/address.component';
import { VoutComponent } from './components/tx/vout/vout.component';
import { VinComponent } from './components/tx/vin/vin.component';

import { AccountsCntPipe } from './pipes/blockTxCount/accounts.pipe';
import { ScoresCntPipe } from './pipes/blockTxCount/scores.pipe';
import { ContentsCntPipe } from './pipes/blockTxCount/contents.pipe';
import { ArticleCntPipe } from './pipes/blockTxCount/articles.pipe';
import { VideosCntPipe } from './pipes/blockTxCount/videos.pipe';
import { BoostCntPipe } from './pipes/blockTxCount/boosts.pipe';
import { CommentsCntPipe } from './pipes/blockTxCount/comments.pipe';
import { SubscribesCntPipe } from './pipes/blockTxCount/subscribes.pipe';
import { PkoinsCntPipe } from './pipes/blockTxCount/pkoins.pipe';
import { FlagsCntPipe } from './pipes/blockTxCount/moderation/flags.pipe';

import { PKoinPipe } from './pipes/pkoin.pipe';
import { TxTypePipe } from './pipes/txType.pipe';
import { TxFeePipe } from './pipes/txFee.pipe';
import { TxAmountPipe } from './pipes/txAmount.pipe';
import { BlockListComponent } from './components/block-list/block-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { Globals } from 'src/app/globals';

import { HighchartsChartModule } from 'highcharts-angular';
import { StatDaysCountComponent } from './components/statistic/stat-days-count/stat-days-count.component';
import { StatEmissionComponent } from './components/statistic/emission/stat-emission.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { RoundPipe } from './pipes/round.pipe';
import { RplPipe } from './pipes/rpl.pipe';

import { NodesListComponent } from './components/nodes-list/nodes-list.component';
import { NodesListSelectComponent } from './components/nodes-list-select/nodes-list-select.component';

import { NodeComponent } from './components/nodes-list/node/node.component';
import { AddressesComponent } from './components/topaddresses/topaddresses.component';

import { ProxyserversComponent } from './components/proxyservers/proxyservers.component';

import { ModalComponent } from './components/modal/modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { DatePipe } from '@angular/common'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BlockComponent,
        HomeComponent,
        LoaderComponent,
        TransactionComponent,
        TxListComponent,
        TxComponent,
        AddressComponent,
        AddressesComponent,
        VoutComponent,
        VinComponent,
        AccountsCntPipe,
        ContentsCntPipe,
        ArticleCntPipe,
        VideosCntPipe,
        BoostCntPipe,
        CommentsCntPipe,
        ScoresCntPipe,
        SubscribesCntPipe,
        PkoinsCntPipe,
        FlagsCntPipe,
        PKoinPipe,
        TxTypePipe,
        TxFeePipe,
        TxAmountPipe,
        BlockListComponent,
        FooterComponent,
        TimeAgoPipe,
        StatDaysCountComponent,
        StatEmissionComponent,
        RoundPipe,
        RplPipe,
        NodesListComponent,
        NodesListSelectComponent,
        NodeComponent,
        ProxyserversComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        HighchartsChartModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [Globals, TxTypePipe, DatePipe]
})
export class AppModule { }
