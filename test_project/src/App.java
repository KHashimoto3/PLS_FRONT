import java.util.Scanner;

public class App {

    static String first_str = "text"; // 前半の文字列
    static String latter_str = "text"; // 後半の文字列

    // 変数名を返す関数
    public static String check_variable(String str, int s) {
        String variable_str = "text";

        int e = -1; // 後半の終わり

        // 後半の位置を把握
        for (int str_idx = s; str_idx < str.length(); str_idx++) {
            if (str.charAt(str_idx + 1) == ';') { // 中身の最後の位置だったら
                e = str_idx;
                break;
            }
        }

        variable_str = str.substring(s, e + 1);

        return variable_str;
    }

    // 代入か計算を表す
    public static String check_culc(String str, int s) {
        String culc_str = "text";

        int e = -1; // 後半の終わり

        // 後半の位置を把握
        for (int str_idx = s; str_idx < str.length(); str_idx++) {
            if (str.charAt(str_idx + 1) == ';') { // 中身の最後の位置だったら
                e = str_idx;
                break;
            }
        }

        culc_str = str.substring(s, e + 1);

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

    // 変数宣言なのかを確認する関数
    public static int check_is_declaration(String str) {
        String[] type = { "int", "double", "float", "char" };
        int result = 0;
        // 登録されているどれかの型だったら
        for (int type_idx = 0; type_idx < type.length; type_idx++) {
            if (str.equals(type[type_idx])) { // いずれかのタイプだったら
                result = 1;
                break;
            }
        }
        return result;
    }

    public static void main(String[] args) throws Exception {

        Scanner s = new Scanner(System.in); // 入力用に定義

        // 判定結果の配列
        String[] judge = { "対象外文字列", "変数宣言", "計算式または代入", "関数" };
        int judge_res = 0;

        System.out.println("空白やタブ入りの文字列を入力してください！"); // 出力
        String str = s.nextLine(); // 入力

        System.out.println("処理前：" + str);

        // 前半部分
        int first_s = -1; // 前半の始まり
        int first_e = -1; // 前半の終わり

        // 前半の位置を把握
        for (int str_idx = 0; str_idx < str.length() - 1; str_idx++) {
            System.out.println("判定します！");
            // 空白でなく、かつ最初の地点が決まっていない場合
            if ((str.charAt(str_idx) != ' ') && first_s == -1) {
                first_s = str_idx;
            }
            // 関数の終わりの文字だったら
            else if (str.charAt(str_idx + 1) == '(') {
                first_e = str_idx;
                first_str = str.substring(first_s, first_e + 1);
                // 関数の後半部分を調べる
                latter_str = check_function_name(str, first_e + 2);
                judge_res = 3;
                break;
            }
            // 演算子だったら
            else if ((str.charAt(str_idx + 1) == '+') || (str.charAt(str_idx + 1) == '-')
                    || (str.charAt(str_idx + 1) == '*') || (str.charAt(str_idx + 1) == '/')
                    || (str.charAt(str_idx + 1) == '=')) {
                first_e = str_idx;
                first_str = str.substring(first_s, first_e + 1);
                latter_str = check_culc(str, first_e + 1);
                judge_res = 2;
                break;
            }
            // 途中の空白を見つけたら
            else if ((str.charAt(str_idx + 1) == ' ') && (first_s != -1)) {
                // 変数宣言なのかを確認
                int result;
                first_e = str_idx;
                first_str = str.substring(first_s, first_e + 1);
                result = check_is_declaration(first_str);
                if (result == 1) { // 変数宣言だったら
                    latter_str = check_variable(str, first_e + 2);
                    judge_res = 1;
                    break;
                }
                // そうで無い場合は処理を継続
            }
        }

        System.out.print("\n");

        System.out.println("これは、" + judge[judge_res] + "　です。");

        if (judge_res != 0) {
            System.out.println("前半：" + first_str);
            System.out.println("後半：" + latter_str);
        }

        s.close();

    }

}
