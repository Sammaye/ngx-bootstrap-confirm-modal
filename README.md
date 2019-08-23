# ngx-bootstrap-confirm-modal

A really simple but so very helpful confirm modal for Ngx Bootstrap.

## Install
```bash
npm i @sammaye/ngx-bootstrap-confirm-modal --save
```

## Use

In module:

```typescript
@NgModule({
  imports: [
    ModalModule.forRoot(),
    NgxBootstrapConfirmModalModule,
  ],
})
export class MyModule {
}
```

In Component:

```typescript
componentFunction() {
    this.modalService.show(NgxBootstrapConfirmModal, {
      ignoreBackdropClick: true, initialState: {
        message: `Do you luuuuuv me?`
      }
    }).content.result.subscribe(response => {
      if (response) {
        // yes I do
      }
    });
}
```

As simple as that, it works exactly as how the Ngx Bootstrap documentation says modals should work. All this library does is give you the code to produce a confirmation modal for free.
