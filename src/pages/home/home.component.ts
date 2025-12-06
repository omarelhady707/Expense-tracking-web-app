import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router'; //
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  showBudgetModal: boolean = false;
  showExpenseModal: boolean = false;
  showIncomeModal: boolean = false;
  showGoalModal: boolean = false;
  showReportModal: boolean = false;


  budgetIncome: string = '';
  budgetCategory: string = 'Food'; // Default selection
  budgetAmount: string = '';

  expenseCategory: string = 'Entertainment'; // Default selection
  expenseAmount: string = '';
  expenseDate: string = '';

  newIncomeSource: string = '';
  newIncomeAmount: string = '';

  incomeList: any[] = [
    { source: 'Salary', amount: 7000 },
    { source: 'Freelance', amount: 6 },
    { source: 'Dividends', amount: 7 }
  ];
  lastGoal: string = 'Buy a Car'; // Example static data
  selectedGoal: string = 'Vacation';
  

constructor(private router: Router) {}
  logout() {
  this.router.navigate(['login']); 
  }
  openBudgetModal() {
    this.showBudgetModal = true;
  }

  closeBudgetModal() {
    this.showBudgetModal = false;
  }

  openExpenseModal() {
    this.showExpenseModal = true;
  }

  closeExpenseModal() {
    this.showExpenseModal = false;
  }

  openIncomeModal() { this.showIncomeModal = true; }
  closeIncomeModal() { this.showIncomeModal = false; }

  openGoalModal() { this.showGoalModal = true; }
  closeGoalModal() { this.showGoalModal = false; }

  openReportModal() { this.showReportModal = true; }
  closeReportModal() { this.showReportModal = false; }


  // --- Placeholder methods for Save actions ---
  saveBudget() {
    console.log('Budget Saved:', this.budgetIncome, this.budgetCategory, this.budgetAmount);
    this.closeBudgetModal();
  }

  addExpense() {
    console.log('Expense Added:', this.expenseCategory, this.expenseAmount, this.expenseDate);
    this.closeExpenseModal();
  }

  addIncomeItem() {
    if(this.newIncomeSource && this.newIncomeAmount) {
      this.incomeList.push({
        source: this.newIncomeSource,
        amount: this.newIncomeAmount
      });
      // Clear inputs
      this.newIncomeSource = '';
      this.newIncomeAmount = '';
    }
  }

  deleteIncomeItem(index: number) {
    this.incomeList.splice(index, 1);
  }

  saveGoal() {
    this.lastGoal = this.selectedGoal;
    this.closeGoalModal();
  }

  printReport() {
    window.print();
  }

  ngAfterViewInit() {
    Chart.register(...registerables);

    // Function to generate different shades of a base color
    const generateShades = (baseColor: string, count: number) => {
      const colors = [];
      for (let i = 0; i < count; i++) {
        const opacity = 0.3 + 0.7 * (i / (count - 1)); // from 0.3 to 1
        colors.push(baseColor.replace('OPACITY', opacity.toString()));
      }
      return colors;
    };

    // First bar chart (Sales)
    new Chart('myBarChart1', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2],
          backgroundColor: generateShades('rgba(255, 99, 132, OPACITY)', 5)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true }
        }
      }
    });

    // Second bar chart (Expenses)
    new Chart('myBarChart2', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Expenses',
          data: [8, 15, 10, 6, 3],
          backgroundColor: generateShades('rgba(54, 162, 235, OPACITY)', 5)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
}
