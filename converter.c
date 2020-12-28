#include<stdio.h>
#include<math.h>

void dectobin(int);
void bintodec(int);

int main() {
    int ch, n;
    printf("1. Decimal to Binary \n2. Binary to Decimal \n\nEnter your choice(1,2): ");
    scanf("%d",&ch);
    switch(ch){
        case 1:
            printf("Enter Decimal Number: ");
            scanf("%d",&n);
            dectobin(n);
            break;
        case 2:
            printf("Enter Binary Number: ");
            scanf("%d",&n);
            bintodec(n);
            break;
        default:
            printf("Wrong choice! ");
    }
    return 0;
}
void dectobin(int n){
    int i, r, k=0, b=0, j;
    for(i=n; i>0; i/=2){
        r = i%2;
        j=r*pow(10,k);
        b+=j;
        k++;
    }
    printf("Binary No: %u",b);
}

void bintodec(int n){
    int i, b, k=0, d=0, j;
    for(i=n; i>0; i/=10){
        b= i%10;
        j=b*pow(2,k);
        d+=j;
        k++;
    }
    printf("Decimal No: %u",d);
}
