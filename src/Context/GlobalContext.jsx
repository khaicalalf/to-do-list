import { createContext, useContext, useState, useEffect } from "react";

// Buat Context
const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //addTask
  const addTask = (name, time) => {
    const newTask = {
      id: tasks.length + 1,
      name: name,
      time: time,
      checked: false, // Waktu berdasarkan input pengguna
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Hapus Tugas
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Tandai Tugas sebagai Selesai
  const checkedTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: true } : task
      )
    );
  };

  const uncheckedTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, checked: false } : task
      )
    );
  };

  //hapus semua tugas
  const clearTasks = () => {
    setTasks([]);
  };

  // Menghitung jumlah task selesai dan belum selesai
  const getTaskStats = () => {
    const completed = tasks.filter((task) => task.checked).length;
    const pending = tasks.length - completed;
    return { completed, pending };
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        checkedTask,
        uncheckedTask,
        clearTasks,
        getTaskStats,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Hook untuk mengakses Context dengan mudah
export function useTask() {
  return useContext(GlobalContext);
}
