async function hash(chunks) {
  return new Promise((resolve, reject) => {
    const spark = new SparkMD5();
    function _read(i) {
      if (i >= chunks.length) {
        resolve(spark.end());
        return;
      }
      const reader = new FileReader();
      const blob = chunks[i];
      reader.onload = (e) => {
        const bytes = e.target.result;
        spark.append(bytes);
        _read(i + 1);
      };
      reader.readAsArrayBuffer(blob);
    }
    _read(0);
  });
}
