import java.io.File;
import java.util.List;
import java.util.Scanner;
import java.util.Random;
import java.util.ArrayList;

public class Lab2 {
    public static void main(String[]args) throws Exception
    {
        //opening scanner, taking in the list of words.
        Scanner sc = new Scanner(System.in);
        /*List<String> words = Files.lines(Paths.get("C:/Users/alexm/Desktop/School/CS211/Lab 2 14.02.22/allowable.txt")).toList();
        List<String> toguess = Files.lines(Paths.get("C:/Users/alexm/Desktop/School/CS211/Lab 2 14.02.22/allowable.txt")).toList();*/

        Scanner s = new Scanner(new File("C:/Users/alexm/Desktop/School/CS211/Lab 2 14.02.22/allowable.txt"));
        Scanner s2 = new Scanner(new File("C:/Users/alexm/Desktop/School/CS211/Lab 2 14.02.22/allowable.txt"));
        ArrayList<String> words = new ArrayList<String>();
        ArrayList<String> toguess = new ArrayList<String>();
        while (s.hasNextLine()){
            words.add(s.nextLine());
        }
        while (s2.hasNextLine()){
            toguess.add(s2.nextLine());
        }
        s.close();
        s2.close();

        //declaring random, getting size of dictionary of 5 letter words and allowed words and selecting a random word to be the answer and capitalising.
        Random r = new Random();
        int DictSize = words.size();
        //int allowedsize = allowedwords.size();-
        String answer = words.get(r.nextInt(DictSize)).toUpperCase();

        //printing the answer just for development reasons
        System.out.println(answer);

        //declaring tries variable to count the ammount of times a user inputs words
        int tries = 0;
        //printing the initial amount of words that can be guessed
        System.out.println("Size = " + toguess.size());
        //prints out the best word to start with
        System.out.println("Try ARIEL");

        //while loop to go through the programme
        while(tries<5)
        {

            //getting user input and capitalising it
            String trial = sc.nextLine().toUpperCase();
            System.out.println(trial);
            if(words.contains(trial.toLowerCase()))
            {
                //if user input is the same as answer then
                if (trial.equals(answer)) {
                    System.out.println("The String is correct, all characters are in the right positions.");
                    tries = 6;
                }
                //comparing and itterating
                else {
                    for (int i = 0; i < answer.length(); i++)
                    {
                        char c = trial.charAt(i);
                        comparison(c,answer,i,toguess);
                    }
                    tries++;
                }
            }
            else
            {
                System.out.println("!!!!STRING IS INVALID TRY AGAIN!!!!");
            }
            //prints out a random word from the list of possible guesses
            if(tries < 5)
            {
                System.out.println("Try " + toguess.get(r.nextInt(toguess.size())).toUpperCase());
            }
        }
    }
    //method for comparing and determining if chars are where they should be, also calling on the deletion method for the list
    public static void comparison(char c, String answer, int i, List<String> toguess)
    {
        if(c == answer.charAt(i))
        {
            System.out.println("Character "+ c +" is in the correct position.");
            if(i == 0)
            {
                removewords(toguess , c, i,true, false);
            }
            else if(i==1)
            {
                removewords(toguess , c, i,true, false);
            }
            else if(i==2)
            {
                removewords(toguess , c, i,true, false);
            }
            else if(i == 3)
            {
                removewords(toguess , c, i,true, false);
            }
            else {
                removewords(toguess, c, i,true, false);
            }
            System.out.println("Words left to guess = " + toguess.size());
        }
        else if(c == answer.charAt(0)||c == answer.charAt(1)||c == answer.charAt(2)||c == answer.charAt(3)||c == answer.charAt(4))
        {
            System.out.println("Character "+ c + " is in the incorrect position.");
            removewords(toguess , c, i,false, true);
            System.out.println("Words left to guess = " + toguess.size());
        }
        else if(c != answer.charAt(0)||c != answer.charAt(1)||c != answer.charAt(2)||c != answer.charAt(3)||c != answer.charAt(4))
        {
            removewords(toguess, c, i,false,  false);
            System.out.println("Character "+ c + " is not in the string.");
            System.out.println("Words left to guess = " + toguess.size());
        }
    }

    public static void removewords(List<String> toguess, char c, int index,boolean rightind, boolean wrongind)
    {
        //for loop to go through the list of possible guesses
        for(int i = 0; i < toguess.size(); i++)
        {
            //capitalising the possible guesses to check them against the criteria
            String check = toguess.get(i).toUpperCase();
            //if the index is correct
            if(rightind && !wrongind)
            {
                if(check.charAt(index)!=c)
                {
                    toguess.remove(i);
                    i = 0;
                }
            }
            //if not the correct index but still in string
            if(!rightind && wrongind)
            {
                if(check.charAt(index) == c)
                {
                        toguess.remove(i);
                }
                boolean haschar = false;
                for (int n = 0; n < check.length(); n++)
                {
                    if (check.charAt(n) == c) {
                        haschar = true;break;
                    }
                }
                if(!haschar)
                {
                    toguess.remove(i);
                    i = 0;
                }
            }
            //if not in string
            if(!rightind && !wrongind)
            {
                for (int n = 0; n < check.length(); n++)
                {
                    if (check.charAt(n) == c) {
                        toguess.remove(i);
                        i = 0;
                    }
                }
            }
        }
    }
}