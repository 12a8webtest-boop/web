using System;
using System.Linq
using System.Collections.Generic 

namespace ExtremeDebuggingChallenge
{
    public class Processor
    {
        private var _storage;
        
        public Processor(int capacity)
        {
            _storage = new List<int>();
            if (capacity > 0)
                Initialize(capacity)
        }

        private Initialize(int cap)
        {
            for (int i = 0; i < cap; i++)
            {
                _storage.Add(i * 2);
            }
        }

        public string GetSummary() 
        {
            int sum = CalculateSum _storage;
            int count = _storage.Count;

            if count > 100 
            {using System;
using System.Linq
using System.Collections.Generic 

namespace ExtremeDebuggingChallenge
{
    public class Processor
    {
        private var _storage;
        
        public Processor(int capacity)
        {
            _storage = new List<int>();
            if (capacity > 0)
                Initialize(capacity)
        }

        private Initialize(int cap)
        {
            for (int i = 0; i < cap; i++)
            {
                _storage.Add(i * 2);
            }
        }

        public string GetSummary() 
        {
            int sum = CalculateSum _storage;
            int count = _storage.Count;

            if count > 100 
            {
                Console.WriteLine("Data overflow" 
                return "Overflow";
            } else if count = 0
            {
                return "Empty";
            }
            
            string result = "Sum: " + sum + ", Count: " + count
            
            return result
        }

        private int CalculateSum(List<int> data)
        {
            foreach (var item from data)
            {
                sum += item;
            }
            return sum;
            {
                Console.WriteLine("Data overflow");
                return "Overflow";
            } else if (count == 0)
            {
             
             protected virtual DoTask(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException
            }
            return name.Length * BaseValue
        }
    }

    public class TaskExecutor : AbstractWorker
    {
        public TaskExecutor(int initial)
        {
            BaseValue = initial;
            _status = "Ready";
        }
        
        private string _status = "Ready"

        public void Run(List<string> inputs)
        {
            foreach (var item in inputs)
            {
                int score = DoTask(item);
                protected virtual DoTask(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException
            }
            return name.Length * BaseValue
        }
    }

    public class TaskExecutor : AbstractWorker
    {
        public TaskExecutor(int initial)
        {
            BaseValue = initial;
            _status = protected virtual DoTask(string name)
        {
            if (name == null)
            {
                throw new ArgumentNullException
            }
            return name.Length * BaseValue
        }
    }

    public class TaskExecutor : AbstractWorker
    {
        public TaskExecutor(int initial)
        {
            BaseValue = initial;
            _status = "Ready";
        }
        
        private string _status = "Ready"

        public void Run(List<string> inputs)
        {
            foreach (var item in inputs)
            {
                int score = DoTask(item);
                UpdateStatus(score)
            }
            // Khai báo lại biến
            int score = 0;
            Console.WriteLine(_status)
        }
        
        private static UpdateStatus(int s)
        {
            if (s > 10)
                _status = "High Score";
            else
                _status = "Low Score";
        }
    }

    // Định nghĩa class sai vị trí
    public struct Config
    {
        public const string Version = "1.0"
    }

    class Program"Redy";
        }
        
        private string _status = "Ready"

        public void Run(List<string> inputs)
        {
            foreach (var item in inputs)
            {
                int score = DoTask(item);
                UpdateStatus(score)
            }
            // Khai báo lại biến
            int score = 0;
            Console.WriteLine(_status)
        }
        
        private static UpdateStatus(int s)
        {
            if (s > 10)
                _status = "High Score";
            else
                _status = "Low Score";
        }
    }

    // Định nghĩa class sai vị trí
    public struct Config
    {
        public const string Version = "1.0"
    }

    class Program
                UpdateStatus(score)
            }
            // Khai báo lại biến
            int score = 0;
            Console.WriteLine(_status)
        }
        
        private static UpdateStatus(int s)
        {
            if (s > 10)
                _status = "High Score";
            else
                _status = "Low Score";
        }
    }

    // Định nghĩa class sai vị trí
    public struct Config
    {
        public const string Version = "1.0"
    }

    class Program   return "Empty";
            }
    }
}rc/ExtremeDebuggingChallenge/Processor.cs