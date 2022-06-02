// Component Life Cycle Hooks

In Angular, every component has a lifecycle. Angular creates and renders these components and also destroys them before removing them from the DOM.
This is achieved with the help of lifecycle hooks. Here's the list of them - 

1)ngOnChanges() - Responds when Angular sets/resets data-bound input properties.
2)ngOnInit() - Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties/
3)ngDoCheck() - Detect and act upon changes that Angular can't or won't detect on its own.
4)ngAfterContentInit() - Responds after Angular projects external content into the component's view.
5)ngAfterContentChecked() - Respond after Angular checks the content projected into the component.
6)ngAfterViewInit() - Respond after Angular initializes the component's views and child views.
7)ngAfterViewChecked() - Respond after Angular checks the component's views and child views.
8)ngOnDestroy - Cleanup just before Angular destroys the directive/component.

// What are Promises and Observables in angular

While both the concepts deal with Asynchronous events in Angular, Promises handle one such event at a time while observables handle a sequence of events
over some time. 

Promises - They emit a single value at a time. They execute immediately after creation and are not cancellable. 
           They are Push errors to the child promises. 

Observables - They are only executed when subscribed to them using the subscribe() method. They emit multiple values over a period of time. 
              They help perform operations like forEach, filter, and retry, among others. They deliver errors to the subscribers. 
              When the unsubscribe() method is called, the listener stops receiving further values.
  
// 

