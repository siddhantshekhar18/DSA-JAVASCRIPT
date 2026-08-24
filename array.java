public class array {
    public static void main(String args[]){
        int arr[] = {1,2,3,4,5,6,2,3,4,6,3,3,4,5,3,2,4,5,6,7,8,9,0};
        for (int i = 0; i < arr.length; i++){
            if(arr[i] == arr[i+1]){
                System.out.println("Duplicate element found: " + arr[i]);
            }
        }
    }
}