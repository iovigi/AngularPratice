export class CounterService{
    private countActiveClick:number=0;
    private countInactiveClick:number=0;

    setActive()
    {
        this.countActiveClick++;
        console.log("inactive->active count:" + this.countActiveClick);
    }

    setInactive()
    {
        this.countInactiveClick++;
        console.log("active->inactive count:" + this.countInactiveClick);
    }
}