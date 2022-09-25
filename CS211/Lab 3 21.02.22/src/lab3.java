import java.io.*;
import java.util.ArrayList;
import java.util.Random;


public class lab3{
    public static void main(String[]args)
    {

    }
}


class Brain{
    public ArrayList dictionary;
    public ArrayList possible;

    public Brain(ArrayList wordlist){
        dictionary = wordlist;
        possible = wordlist;
    }

    public String guessWord(String feedback, String lastguess)
    {
        for(int i = 0; i < feedback.length(); i++)
        {
            //if not in the string
            if(feedback.charAt(i) == 0)
            {
                for(int n = 0; n < possible.size(); n++)
                {
                    String check = (String)possible.get(n);
                    if(lastguess.charAt(i) == check.charAt(i))
                    {
                        possible.remove(n);
                        n = 0;
                    }
                }
            }
            //if the char is in the string but not in the correct place
            if(feedback.charAt(i) == 1)
            {
                for(int n = 0; n < possible.size(); n++)
                {
                    String check = (String) possible.get(n);
                    if(lastguess.charAt(i) == check.charAt(i))
                    {
                        possible.remove(n);
                        n = 0;
                    }
                    boolean haschar = false;
                    for(int y = 0; y < check.length(); y++)
                    {
                        if (check.charAt(y) == lastguess.charAt(i)) {
                            haschar = true;break;
                        }
                    }
                    if(!haschar)
                    {
                        possible.remove(n);
                        n = 0;
                    }
                }
            }
            //if the char is in the correct place
            if(feedback.charAt(i) == 2)
            {
                for(int n = 0; n < possible.size(); n++)
                {
                    String check = (String) possible.get(n);
                    if(lastguess.charAt(i) != check.charAt(i))
                    {
                        possible.remove(n);
                        n = 0;
                    }
                }
            }
        }

        //after all the deleting, prints out a random string within the leftover words
        Random r = new Random();
        return (String)possible.get(r.nextInt(possible.size()));
    }
}



class Dictionary{
    private String input[];
    public Dictionary(){
        input = load("C://Users//alexm//Desktop//School//CS211//Lab 3 21.02.22//words.txt");
    }
    public int getSize(){
        return input.length;
    }
    public String getWord(int n){
        return input[n].trim();
    }
    private String[] load(String file) {
        File aFile = new File(file);
        StringBuffer contents = new StringBuffer();
        BufferedReader input = null;
        try {
            input = new BufferedReader( new FileReader(aFile) );
            String line = null;
            int i = 0;
            while (( line = input.readLine()) != null){
                contents.append(line);
                i++;
                contents.append(System.getProperty("line.separator"));
            }
        }catch (FileNotFoundException ex){
            System.out.println("Can't find the file - are you sure the file is in this location: "+file);
            ex.printStackTrace();
        }catch (IOException ex){
            System.out.println("Input output exception while processing file");
            ex.printStackTrace();
        }finally{
            try {
                if (input!= null) {
                    input.close();
                }
            }catch (IOException ex){
                System.out.println("Input output exception while processing file");
                ex.printStackTrace();
            }
        }
        String[] array = contents.toString().split("\n");
        for(String s: array){
            s.trim();
        }
        return array;
    }
}
