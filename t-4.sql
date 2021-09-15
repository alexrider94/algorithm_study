-- 코드를 입력하세요
SELECT EMPLOYEE_ID,
    CASE
        WHEN (COUNT(EMPLOYEE_ID) >= 4) THEN '최우수 사원'
        WHEN (COUNT(EMPLOYEE_ID) BETWEEN 2 AND 3) THEN '우수 사원'
        ELSE '일반 사원'
    END '분류상태',
    COUNT(EMPLOYEE_ID) as COUNT
FROM SELLINGS
GROUP BY EMPLOYEE_ID
ORDER BY EMPLOYEE_ID ASC