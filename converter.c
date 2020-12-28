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
