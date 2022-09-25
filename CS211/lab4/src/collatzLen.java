import java.util.*;
public class collatzLen {
    //declaring public int arrays
    public static int nums[];
    public static int ctz[];

    public static void main(String[]args)
    {
        //opening scanner and declaring variables and getting input
        Scanner sc = new Scanner(System.in);
        int from = sc.nextInt();
        int to = sc.nextInt();
        int ind = sc.nextInt();
        //declaring int arrays' sizes
        nums = new int[to-from+1];
        ctz = new int[nums.length];
        //for loop to feed nums the inputs
        for(int i = 0; i < nums.length; i++)
        {
            nums[i] = from;
            from++;
        }
        //calling collatz method to get the collatz values of nums in nums array, also sorting the arrays
        collatz(nums, ctz);
        sort();
        /*
        for(int i = 0; i < ctz.length; i++)
        {
            System.out.println(nums[i] + " = " + ctz[i]);
        }*/
        //printing the final output
        System.out.println(nums[ind-1]);
    }
    public static void collatz(int nums [], int ctz [])
    {
        for(int i = 0; i < nums.length; i++)
        {
            int steps = 0;
            int check = nums[i];
            while(check !=1)
            {
                if(check%2==0)
                {
                    check = check/2;
                    steps++;
                }
                else
                {
                    check = (check*3) + 1;
                    steps++;
                }
            }
            ctz[i] = steps;
        }
    }
    //from here on it's edited median of 3 quicksort from the internet ;) basically just swap nums array following the same criteria as the ctz array is following.
    public static void sort(){
        int left = 0;
        int right = ctz.length-1;

        quickSort(left, right);
    }

    // This method is used to sort the array using quicksort algorithm.
    // It takes left and the right end of the array as two cursors
    private static void quickSort(int left,int right){

        // If both cursor scanned the complete array, quicksort exits
        if(left >= right)
            return;

        // Pivot using median of 3 approach
        int pivot = getMedian(left, right);
        int partition = partition(left, right, pivot);

        // Recursively, calls the quicksort with the different left and right parameters of the sub-array
        quickSort(0, partition-1);
        quickSort(partition+1, right);
    }

    // This method is used to partition the given array and returns the integer which points to the sorted pivot index
    private static int partition(int left,int right,int pivot){
        int leftCursor = left-1;
        int rightCursor = right;
        while(leftCursor < rightCursor){
            while(ctz[++leftCursor] < pivot);
            while(rightCursor > 0 && ctz[--rightCursor] > pivot);
            if(leftCursor >= rightCursor){
                break;
            }else{
                swap(leftCursor, rightCursor);
                swap2(leftCursor, rightCursor);
            }
        }
        swap(leftCursor, right);
        swap2(leftCursor, right);
        return leftCursor;
    }

    public static int getMedian(int left,int right){
        int center = (left+right)/2;

        if(ctz[left] > ctz[center]) {
            swap(left, center);
            swap2(left, center);
        }

        if(ctz[left] > ctz[right]) {
            swap(left, right);
            swap2(left, right);
        }

        if(ctz[center] > ctz[right]) {
            swap(center, right);
            swap2(center, right);
        }

        swap(center, right);
        swap2(center, right);
        return ctz[right];
    }

    // This method is used to swap the values between the two given index
    public static void swap(int left,int right){
        int temp = ctz[left];
        ctz[left] = ctz[right];
        ctz[right] = temp;
    }
    // This method is used to swap the values between the two given index part 2
    public static void swap2(int left,int right){
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
}
