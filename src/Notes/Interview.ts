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

