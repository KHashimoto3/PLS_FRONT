public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("aとbの入力をしてください！"); // 出力
        int a = new java.util.Scanner(System.in).nextInt(); // 値の入力
        int b = new java.util.Scanner(System.in).nextInt(); // 値の入力

        System.out.println(a * b);
    }
}
