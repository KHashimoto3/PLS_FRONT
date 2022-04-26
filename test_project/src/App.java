import java.util.Scanner;

public class App {

    // 変数名を返す関数
    public static String check_variable(String str, int s) {
        String variable_str = "text";
        return variable_str;
    }

    // 計算式を返す
    public static String check_culc(String str, int s) {
        String culc_str = "text";
        return culc_str;
    }

    // 関数名を返す
    public static String check_function_name(String str, int s) {
        String func_name_str;

        int e = -1; // 後半の終わり

        // 後半の位置を把握
        for (int str_idx = s; str_idx < str.length(); str_idx++) {
            if (str.charAt(str_idx + 1) == ')') { // 中身の最後の位置だったら
                e = str_idx;
                break;
            }
        }

        func_name_str = str.substring(s, e + 1);

        return func_name_str;
    }

    public static void main(String[] args) throws Exception {

        Scanner s = new Scanner(System.in); // 入力用に定義

        System.out.println("空白やタブ入りの文字列を入力してください！"); // 出力
        String str = s.nextLine(); // 入力

        System.out.println("処理前：" + str);

        // 前半部分
        int first_s = -1; // 前半の始まり
        int first_e = -1; // 前半の終わり

        String first_str = "text"; // 前半の文字列
        String latter_str = "text"; // 後半の文字列

        // 前半の位置を把握
        for (int str_idx = 0; str_idx < str.length(); str_idx++) {
            // 空白でなく、かつ最初の地点が決まっていない場合
            if ((str.charAt(str_idx) != ' ') && first_s == -1) {
                first_s = str_idx;
            }
            // 関数の終わりの文字だったら
            if (str.charAt(str_idx + 1) == '(') {
                first_e = str_idx;
                first_str = str.substring(first_s, first_e + 1);
                // 関数の後半部分を調べる
                latter_str = check_function_name(str, first_e + 2);
                break;
            }
        }

        System.out.print("\n");

        /*
         * String func_name = str.substring(first_s, first_e + 1); String inner =
         * str.substring(latter_s, latter_e + 1);
         */

        System.out.println("前半：" + first_str);
        System.out.println("後半：" + latter_str);

        s.close();

    }

}
