#include <stdio.h>

int exponent = 2;
int mantissa = 1;

int main() {
  int result;

  if (exponent >= 0) {
    result = mantissa * (1 << exponent);
  } else {
    result = mantissa / (1 << -exponent);
  }

  printf("%d\n", result);
  printf("%s%d%s\n", "2の", exponent, "乗");

  return 0;
}

// できたー
// リーダブルコードの最初の方のサンプルコード
// 2のexponent乗を出力するやつ

// 三項演算子より、if-elseで書いたほうが理解しやすい
