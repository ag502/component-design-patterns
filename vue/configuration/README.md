# configuration

## 정의

다양한 컴포넌트의 동작을 정의하기 위해서 `props`를 사용할 수 있다. <br>
이를 통해 다른 동작을 하는 컴포넌트를 모두 만들 필요가 없어지게 된다.

## props 종류

1. state props <br>
   실제로 사용되는 데이터와 관련되어있다.
2. template props <br>
   탬플릿에 직접 삽입될 수 있다.
3. configuration props <br>
   컴포넌트의 동작을 바꾸기 위해 사용된다. (보통 enum이거나, boolean 경우가 대다수)

## 문제점

`props`가 많아지게 되어 코드가 복잡해질 수 있다.

## 해결책

1. 컴포넌트를 쪼갠다
2. `Base Component`를 만들어 공통된 props들을 분리한다.
