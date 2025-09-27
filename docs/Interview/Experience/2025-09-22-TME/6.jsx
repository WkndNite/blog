import React, { useState, useRef, useEffect, useCallback } from "react";

const SearchSelect = () => {
  // 状态管理
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, loading, error, empty
  const [lastUpdated, setLastUpdated] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  // 缓存和请求管理
  const dataCache = useRef(new Map()); // {keyword: {data, timestamp}}
  const abortControllerRef = useRef(null);
  const lastRequestTime = useRef(0);
  const cacheExpireTime = 30000; // 30秒缓存过期

  // 防抖处理
  const debouncedSearch = useCallback(
    debounce((keyword) => {
      searchData(keyword);
    }, 300),
    [],
  );

  // 输入变化处理
  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
    setShowDropdown(true);

    if (value) {
      debouncedSearch(value);
    } else {
      setOptions([]);
      setStatus("idle");
    }
  };

  // 搜索数据
  const searchData = async (keyword, forceRefresh = false) => {
    // 取消上一次请求
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // 检查缓存
    const cachedData = dataCache.current.get(keyword);
    const now = Date.now();

    // 有有效缓存且不强制刷新时直接使用
    if (
      cachedData &&
      !forceRefresh &&
      now - cachedData.timestamp < cacheExpireTime
    ) {
      setOptions(cachedData.data);
      setStatus(cachedData.data.length ? "success" : "empty");
      setLastUpdated(cachedData.timestamp);
      return;
    }

    // 显示加载状态
    setStatus("loading");

    // 创建新的请求控制器
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const requestTime = Date.now();
    lastRequestTime.current = requestTime;

    try {
      // 实际项目中替换为真实API请求
      const data = await fetchData(keyword, {
        signal: abortController.signal,
      });

      // 只处理最新的请求响应
      if (requestTime === lastRequestTime.current) {
        // 更新缓存
        dataCache.current.set(keyword, {
          data,
          timestamp: Date.now(),
        });

        setOptions(data);
        setStatus(data.length ? "success" : "empty");
        setLastUpdated(Date.now());
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setStatus("error");
      }
    }
  };

  // 模拟API请求
  const fetchData = (keyword, options) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 模拟一些数据
        const mockData = [
          `选项 ${keyword} 1`,
          `选项 ${keyword} 2`,
          `选项 ${keyword} 3`,
        ].filter((item) => item.includes(keyword));

        resolve(mockData);
      }, 800);
    });
  };

  // 选择选项
  const handleSelectOption = (option) => {
    setInputValue(option);
    setShowDropdown(false);
  };

  // 手动刷新
  const handleRefresh = () => {
    if (inputValue.trim()) {
      searchData(inputValue.trim(), true);
    }
  };

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".options-container");
      const input = document.querySelector(".search-input");

      if (
        dropdown &&
        input &&
        !dropdown.contains(event.target) &&
        !input.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 防抖函数
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // 格式化时间显示
  const formatTime = (timestamp) => {
    if (!timestamp) return "";
    return new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="search-select" style={styles.container}>
      <input
        type="text"
        className="search-input"
        placeholder="搜索..."
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => inputValue && setShowDropdown(true)}
        style={styles.input}
      />

      {showDropdown && (
        <div className="options-container" style={styles.dropdown}>
          {status === "loading" && (
            <div style={styles.statusText}>加载中...</div>
          )}

          {status === "error" && (
            <div style={styles.statusText}>
              加载失败
              <span style={styles.refreshBtn} onClick={handleRefresh}>
                重试
              </span>
            </div>
          )}

          {status === "empty" && (
            <div style={styles.statusText}>无匹配结果</div>
          )}

          {status === "success" && options.length > 0 && (
            <>
              {options.map((option, index) => (
                <div
                  key={index}
                  style={styles.optionItem}
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </div>
              ))}
              <div style={styles.statusText}>
                数据更新于 {formatTime(lastUpdated)}
                <span style={styles.refreshBtn} onClick={handleRefresh}>
                  刷新
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// 样式定义
const styles = {
  container: {
    position: "relative",
    width: "300px",
    margin: "20px",
  },
  input: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    maxHeight: "200px",
    overflowY: "auto",
    border: "1px solid #ddd",
    borderTop: "none",
    borderRadius: "0 0 4px 4px",
    background: "#fff",
    zIndex: 1000,
    boxSizing: "border-box",
  },
  optionItem: {
    padding: "8px 12px",
    cursor: "pointer",
  },
  statusText: {
    padding: "8px 12px",
    color: "#666",
    fontSize: "13px",
  },
  refreshBtn: {
    marginLeft: "8px",
    color: "#007bff",
    cursor: "pointer",
    fontSize: "12px",
  },
};

export default SearchSelect;
