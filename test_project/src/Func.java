public class Func {
    // 関数名
    String func_name = "text";
    // 関数の引数一覧
    String[] func_argument;

    // 関数名を返す
    public void check_function_name(String str, int s) {
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

        this.func_argument = func_name_str.split(","); // 引数ごとに分けたものを格納する
    }

    // 結果を出力する
    public void disp_result() {
        System.out.println("これは、関数です。");
        System.out.println("関数名：" + this.func_name);
        for (int argument_idx = 0; argument_idx < this.func_argument.length; argument_idx++) {
            System.out.println(argument_idx + 1 + "個目　" + this.func_argument[argument_idx]);
        }
    }
}
