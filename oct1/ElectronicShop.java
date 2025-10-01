class ElectronicShop {
    public static void main(String[] args) {
        System.out.println("Welcome to the Electronic Shop!");
        int b=70;
        int drivers[]={40,50,60,70,80};
        int usb[]={20,30,3,50,10};
        int total=0;
        int min=0;
        for(int i=0;i<drivers.length;i++){
            for(int j=0;j<usb.length;j++){
                if(drivers[i]+usb[j]<=b){
                    total++;
                    min=Math.max(min,drivers[i]+usb[j]);
                    System.out.println("Combination: Driver = " + drivers[i] + ", USB = " + usb[j] + ", Total = " + (drivers[i] + usb[j]));
                }
            }
        }
        System.out.println("Total combinations found: " + total);
        System.out.println("Minimum combination cost: " + min); 
    }
}