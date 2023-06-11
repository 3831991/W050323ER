interface Task {
    id: number;
    title: string;
    description: string;
    addedTime: string;
    priority: PriorityTypes;
    isCompleted: boolean;
}

enum PriorityTypes {
    low,
    medium,
    high,
}

class TaskManager {
    tasks: Task[] = [
        {
            id: 3,
            title: 'משימה ראשונה',
            addedTime: '2023-06-11 11:11:22',
            description: 'זה תיאור של המשימה הראשונה שיצרנו ישירות מהמחלקה שלימדה אותנו איך לכתוב דברים שלא קשורים למציאות העגומה שבה אניו חיים בביטחה ובשלום שכבר לא נמצא באופק הרחוק',
            isCompleted: false,
            priority: PriorityTypes.low,
        },
        {
            id: 8,
            title: 'משימה שנייה',
            addedTime: '2023-06-11 11:11:22',
            description: '',
            isCompleted: false,
            priority: PriorityTypes.high,
        },
    ];

    constructor() {
        this.showTasks();

        const elem = document.querySelector("header");

        // מגדירים שבלחיצה על הכפתור תופעל פונקציה המוסיפה משימה
        elem?.querySelector("button")?.addEventListener("click", ev => {
            const elemTitle = elem?.querySelector("input");
            const elemPriority = elem?.querySelector("select");

            const title = elemTitle?.value || '';
            const priority = elemPriority?.value || '';

            // איפוס התיבה של הכותרת
            if (elemTitle) {
                elemTitle.value = "";
            }

            // איפוס התיבה של רמת העדיפות
            if (elemPriority) {
                elemPriority.value = "";
            }

            this.addTask(title, +priority);
        });
    }

    addTask(title: string, priority?: PriorityTypes) {
        // מערך של ה-ids
        const ids = this.tasks.map(x => x.id);
        const max = Math.max(...ids);

        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth() + 1;
        const d = now.getDate();

        const h = now.getHours();
        const mn = now.getMinutes();
        const s = now.getSeconds();

        const addedTime = `${y}-${(m < 10 ? '0' + m : m)}-${d} ${h}:${mn}:${s}`;

        this.tasks.push({
            id: max + 1,
            title,
            addedTime,
            description: '',
            isCompleted: false,
            priority: priority || PriorityTypes.low,
        });

        this.showTasks();
    }
    
    editTask() {
        
    }

    removeTask(id: number) {
        // מוחק
        console.log(id);
    }

    completeTask() {

    }

    unCompleteTask() {

    }

    urgencyChange() {

    }

    showTasks() {
        const elem = document.querySelector("div.tasks");
        
        if (elem) {
            elem.innerHTML = "";
        }

        this.tasks.forEach(t => {
            const div = document.createElement("div");

            switch (t.priority) {
                case PriorityTypes.low : div.classList.add('low'); break;
                case PriorityTypes.medium : div.classList.add('medium'); break;
                case PriorityTypes.high : div.classList.add('high'); break;
            }

            div.innerHTML = `
                <h3>${t.title}</h3>
                <p><b>זמן יצירה:</b> ${t.addedTime}</p>
                <p><b>תיאור:</b> ${t.description || '*אין הערה*'}</p>

                <footer>
                    <button class="remove">מחק</button>
                </footer>
            `;

            div.querySelector('.remove')?.addEventListener("click", () => this.removeTask(t.id));

            elem?.appendChild(div);
        });
    }
}

const tasks = new TaskManager;