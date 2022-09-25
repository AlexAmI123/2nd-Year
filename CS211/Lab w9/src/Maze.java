import java.util.*;

public class Maze{

    public static void main(String[] args){
        int lives = 500;
        String[] input = new String[20];
        input[ 0]="XXX XXXXXXX XXXXXX X";
        input[ 1]="XXX XXXXXXX XXXXXX X";
        input[ 2]="XXX      XX XXXX   X";
        input[ 3]="XXXXXXX XXXXXXXXXXXX";
        input[ 4]="XXXXXXX XX      XXXX";
        input[ 5]="XXX  XXXXX XXXX XXXX";
        input[ 6]="XX  X XXXX   XX XXXX";
        input[ 7]="XXX XXXXXXXX XX XXXX";
        input[ 8]="XX  X  XXXXX XX XXXX";
        input[ 9]="XXXXXX       XX XXXX";
        input[10]="X XXXX XX  XXXX XXXX";
        input[11]="     XXXX  XXXX XXXX";
        input[12]="XXXXXXXXXXXXXXX XXXX";
        input[13]="XXXXXX  XXXX    XXXX";
        input[14]="XX XX XXXXXX XX XXXX";
        input[15]="X  XX XXXXXX XX XXXX";
        input[16]="XX XX X  X   XX XX  ";
        input[17]="X  XXXXXXX XXXX XX X";
        input[18]="XX XXXXXXX XXXXXXX X";
        input[19]="XX XXXXXXX XXXXXXX X";
        int posX=10;
        int posY=10;

        boolean[][] maze = new boolean[20][20];
        for(int i=0;i<20;i++){
            for(int j=0;j<20;j++){
                if(input[j].charAt(i)=='X'){
                    maze[i][j]=false;
                }else{
                    maze[i][j]=true;
                }
            }
        }
        System.out.println(posX+" "+posY);
        printboard(maze,posX,posY);
        Brain myBrain = new Brain();


        while(lives>0){
            String move =myBrain.getMove(maze[posX][posY-1],maze[posX][posY+1],maze[posX+1][posY],maze[posX-1][posY]);
            if(move=="north"&&maze[posX][posY-1]){
                posY--;
            }else if(move=="south"&&maze[posX][posY+1]){
                posY++;
            }else if(move=="east"&&maze[posX+1][posY]){
                posX++;
            }else if(move=="west"&&maze[posX-1][posY]){
                posX--;
            }
            System.out.println(posX+" "+posY+" "+lives);
            printboard(maze,posX,posY);
            lives--;
            if(posY%19==0||posX%19==0){
                System.out.println(posX+","+posY);
                System.exit(0);
            }
        }
        System.out.println("You died in the maze!");
    }


    public static void printboard(boolean[][] board, int posX, int posY){
        for(int y=0;y<20;y++){
            for(int x=0;x<20;x++){
                if(x==posX&&y==posY){
                    System.out.print(":)");
                }else{
                    if(board[x][y]==true){
                        System.out.print("  ");
                    }else{
                        System.out.print("■ ");
                    }
                }
            }
            System.out.println();
        }
        try{
            Thread.sleep(100);
        }catch(InterruptedException ex){
            Thread.currentThread().interrupt();
        }
    }
}

class Brain{
    public Stack<String> backtracker = new Stack<String>();
    public static String back = "";
    boolean [][] memory = new boolean[41][41];
    int posx = 20;
    int posy = 20;

    public Brain(){
        for(int i = 0; i < 41; i++)
        {
            for(int n = 0; n < 41; n++)
            {
                memory[i][n] = false;
            }
        }
    }

    public String getMove(boolean north, boolean south, boolean east, boolean west){

        ///*
        if(back != "")
        {
            if(back == "east")
            {
                east = false;
                back = "";
            }
            else if(back == "north")
            {
                north = false;
                back = "";
            }
            else if(back == "south")
            {
                south = false;
                back = "";
            }
            else if(back == "west")
            {
                west = false;
                back = "";
            }
        }
        if(!north && !south && !east)
        {
            backtracker.add("west");
            return "west";
        }
        else if(!north && !south && !west)
        {
            backtracker.add("east");
            return "east";
        }
        else if(!north && !west && !east)
        {
            backtracker.add("south");
            return "south";
        }
        else if(!west && !south && !east)
        {
            backtracker.add("north");
            return "north";
        }
        else if(!north && !south && !east && !west)
        {
            back = backtracker.pop();
            if(back == "east")
            {
                return "west";
            }
            else if(back == "north")
            {
                return "south";
            }
            else if(back == "south")
            {
                return "north";
            }
            else if(back == "west")
            {
                return "east";
            }
        }
        //*/
        /*
        int random = (int)(Math.random()*4);
        switch(random){
            case 0: return "north";
            case 1: return "south";
            case 2: return "east";
            default: return "west";
        }
         */
        return null;
    }
}
