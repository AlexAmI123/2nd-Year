import java.util.List;
import java.util.Scanner;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Random;

public class Lab1 {
    public static void main(String[]args) throws Exception
    {
        //opening scanner, taking in the list of words.
        Scanner sc = new Scanner(System.in);
        List<String> words = Files.lines(Paths.get("C:/Users/alexm/Desktop/School/CS211/Lab1 07.02.22/wordlewords.txt")).toList();
        List<String> allowedwords = Files.lines(Paths.get("C:/Users/alexm/Desktop/School/CS211/Lab1 07.02.22/allowable.txt")).toList();

        //declaring random, getting size of dictionary of 5 letter words and allowed words and selecting a random word to be the answer and capitalising.
        Random r = new Random();
        int DictSize = words.size();
        int allowedsize = allowedwords.size();
        String answer = words.get(r.nextInt(DictSize)).toUpperCase();

        //printing the answer just for development reasons
        System.out.println(answer);

        //declaring tries variable to count the ammount of times a user inputs words
        int tries = 0;

        //while loop to go through the programme
        while(tries<5)
        {
            //getting user input and capitalising it
            String trial = sc.nextLine().toUpperCase();
            System.out.println(trial);
            if(allowedwords.contains(trial.toLowerCase()))
            {
                //if user input is the same as answer then
                if (trial.equals(answer)) {
                    System.out.println("The String is correct, all characters are in the right positions.");
                    tries = 6;
                }
                //comparing and itterating
                else {
                    for (int i = 0; i < answer.length(); i++) {
                        char c = trial.charAt(i);
                        comparison(c, answer, i);
                    }
                    tries++;
                }
            }
            else
            {
                System.out.println("!!!!STRING IS INVALID TRY AGAIN!!!!");
            }
        }
    }
    //method for comparing and determining if chars are where they should be
    public static void comparison(char c, String answer, int i)
    {
        if(c == answer.charAt(i))
        {
            System.out.println("Character "+ c + " is in the correct position.");
        }
        else if(c == answer.charAt(0)||c == answer.charAt(1)||c == answer.charAt(2)||c == answer.charAt(3)||c == answer.charAt(4))
        {
            System.out.println("Character "+ c + " is in the incorrect position.");
        }
        else if(c != answer.charAt(0)||c != answer.charAt(1)||c != answer.charAt(2)||c != answer.charAt(3)||c != answer.charAt(4))
        {
            System.out.println("Character "+ c + " is not in the string.");
        }
    }
}

