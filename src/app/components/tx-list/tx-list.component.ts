import { Component, OnInit, Input, HostListener } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Transaction } from 'src/app/types/Transaction';
import { Globals } from 'src/app/globals';

@Component({
    selector: 'app-tx-list',
    templateUrl: './tx-list.component.html',
    styleUrls: ['./tx-list.component.less'],
    providers: [DataService],
})
export class TxListComponent implements OnInit {
    loading = false;
    completed = false;
    addressHash: string = '';
    blockHash: string = '';
    txs: Transaction[] = [];
    pageInit: number = 0;
    pageStart: number = 0;
    pageSize: number = 10;

    @Input()
    set in_addressHash(addresshash: string) {
        this.addressHash = addresshash;
        this.loadMore();
    }

    @Input()
    set in_blockHash(blockhash: string) {
        this.blockHash = blockhash;
        this.loadMore();
    }

    constructor(private dataService: DataService,
        private global: Globals
    ) {
        this.pageInit = global.blockchainInfo.lastblock.height;
    }

    ngOnInit() {

    }

    get Global() : Globals {
        return this.global;
    }

    loadMore() {
        if (this.addressHash != '')
            this.loadMoreAddress();

        if (this.blockHash != '')
            this.loadMoreBlock();
    }

    loadMoreAddress() {
        if (this.loading) return;
        if (this.completed) return;

        this.loading = true;
        this.dataService.getAddressTransactions(this.addressHash, this.pageInit, this.txs.length + 1, this.pageSize, data => {
            if (data.length <= 0) {
                this.completed = true;
                return;
            }

            let _txs: Transaction[] = data
            this.txs.push.apply(this.txs, _txs);
            this.loading = false;
        });
    }

    loadMoreBlock() {
        if (this.loading) return;
        if (this.completed) return;

        this.loading = true;
        this.dataService.getBlockTransactions(this.blockHash, this.txs.length + 1, this.pageSize, data => {
            if (data.length <= 0) {
                this.completed = true;
                return;
            }

            let _txs: Transaction[] = data
            this.txs.push.apply(this.txs, _txs);
            this.loading = false;
        });
    }

    @HostListener("window:scroll", [])
    onScroll(): void {
        if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 150)) {
            this.loadMore();
        }
    }

}
