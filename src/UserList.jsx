import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl text-purple-600 font-bold mb-12 text-center underline">
        Meet our amazing users :
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {users.map((user) => (
          <div key={user.id} className="shadow-lg rounded-lg p-6 ">

            <div>
              <h2 className="text-3xl font-semibold mb-3 text-purple-600">
                {user.name}
              </h2>
              <p className="flex items-center gap-1  ">
                {" "}
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAndJREFUSEvtlktoE1EUhv8ziRUXojTJpEF8rAWpzUQpbnShOx8gggh1oZsSzAxCN7YukqJFF0JkUihuBLEgggg+drrozkoyCSK6E0UQm0ys2E2xJnN0kpmYhLyaDsmms7t3zv9/55577swl9OmhPnGxCe5Z5WtKrYb0cYH5GgP7nMyAgC8G4YaSEu/bvhWwekg/SgYvOAms9xIE4fCVpDdpzv8HB3NTRJgpBRNPO5oAU9Tym5Q18XYNOBHKxmAHMF+U0/55J+CJYHYMRA/tBckpf6w5GACD5pZXvVdjH2mtmwRi+3lgcFv+LoHDFT3xdFuwFZxxF4RT4Xfeb+uBzw3ndxXcxgsAIzW6tmCieTCPWaIfRHwhkvK/6gQ+G8qeYKZHADzl8lZ5NQQH9SiIS/WXNZFUKacQcAfAFgAGA1FZ883Qv6BGCTCYEpJ+nQCzMQUAfwBMyJqYSEi5sqYTsBmnBpdGiYTnAHwlIdPrAXKdG9cGf1XD70nLO9a4+ATEx63578zGWSU9tGiOW4OrutpcsW0cl/SAG/wUwGh5jr8CfFLWht6XTZcOAPQSoD2WZpGN4mklE9Btj67Apjh2jN2eFT0OQsQy+w3QZSsR82u01Toian67byK2QIXqinQNrmQezJ0H4YENqjJfBeOSnBYfN9r/DYNL+z6SHSZBeAbwXgvyiYTimUgy8KFZ1zsCNs3jB3/udAkFlYgNdrsU5a1npRm06+ZqZdjpO8dW3Clww129XlB9fMsVqz34LRIwFdHEW9bRK+fXi4sAGXwkkvG/qQGbg1kpG2bQJIDdGy1vnf4zE242vPo4DGprt3mvblsipwL6Vuq/OtZALn40VK8AAAAASUVORK5CYII=" />
              <span className=" text-md  text-purple-600 ">{user.email}</span> 
              </p>
            </div>

            <div className="flex flex-col gap-2">

              <div className="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABKRJREFUSEvFVn1sU1UU/53XrtOpTMb66uYXiAh+oFvfQPcHONGICdEoBBOjiUFNRlhfRcWvZCEzBhTlI2nrdBCmMfyFJosmGjFLRCSaSG9ZiCDJZAwlC33dptNFWde+I/e911lI39riH9ykSd+95/x+93fuOedewiUadIl4UTZxrHHoRpAnyIoym0wwkzmYRUVivaj5tRwRJREzmGKa0QrQiwDmuRAcB2FrKO7vJhAX20RR4mhjqh6K2QPQ4mJgzvp3PmRWtor64enspyWOLU7dwlneD6DOBuFjAO1khfoqzcmjciZNFXeQiQYQr2VgvpwjYJAUz9K2Q7N+cyN3JY7cPTKDMtn4f6GljSOidlMHyCwE1tHC3trx4c3M/LKzfpjHxprDv8ybKGTvShzTknsY9KSjtE0Xgc4cQCRoLCGF75ffClNvm1AP5tZiWmrjuZx4w1bO20IisKFk4kjwzD1Eyg+WA/FOPR5olX+j2vACgD8F+PZ8MAaOALwyLAInbLtUD8CPAjDNLBY836f2X0heUHGkydhBjPXSkc3sNeHDdan37zyjZiqUBIBrXc7tpA/exlZRM2Zv0PzZygrmV8KJwLslEUe11E+Oqq91oS6XTrGgsZsJz9gA9EEmm9ni9RFRRmmfmmd6R0/4X7VVJ48CdBuAKYx88oKKo5oxCmAmg7eHReAlB2gEoBowvtUTaks+SCRo/EiERQCO60K91bY3PgLwtMzwkFDnlKg4OQGQD4xNekJtd4AmAXgB2qoLfy5zLbyIltxGdnP5RxdqlWP/FoDXzv3O6kK9vFTiUwDdAGC3LtTnHCDZEq8H4YAeV+/NB4o2Gd+D0QxgQBfqXMu+yegGYw1Ap3Thn10isXEAwBICvgkJdZmlqsmIEaPNAejMwrvF40l78s/4/KOxMQodjV1qBUZEM3YRIJWaPnhrZKZubx6rqUhP9FmqC49+H7yLpG1s8elZnPUZssyJuSuUCKwtSXFESz5IoH1WORCeDcfVbjvcLnXMOOTxeFblWmRUS64D6D27AOg+Pe6Xbfe8UVDx3tXsSQ6khgCoAE774L+pVZBMLmtEg8PLoGSXWhsDfRaOq4dza13aUFUa3kEAfgBDIeG/rtBt5d6rNaOdgDctcJcmUCjiUc3YDOB1Z1MbwsK/rZCdO/HN/ZVUXT0AoB7gdCZrzn+hr04qcR2RxuRdpJDsborMcB/8C/Ijle847bUY1YzVAPbau8eRSmSaW0X934WYOxf+MTPrSwsAVrMgwopQXP3SbZfFHwKaIZNknQXA/Hlgrrry8U8omw/4YcvJy8bHr9gHhnXuAN7WhWqF+6KJrUQ7MfwViB9wlO8dFf4ncveyRfpX1RcAWfUOoCck/KuKPX+KKpZIMlMn4T3AgGZBO1dlB1iZFTR6QPSIHRHqHTlbu6LjGKWnU2tBFDPIrXdpo9VpZGQ9NjhzHwO4CsBjzrd8az3klgMX8pRMLB2d7iXJF+YDMXCwEpnlpZKWpThHtKPh96u9nvS+qVcnU++VM8YfXrN/ztlSo3dRxNJJPuxq/kw9BYXN0bi6x+0B+L+yuhwV5diWdcblABez/Rc2ttMum219AQAAAABJRU5ErkJggg==" />
                <p className="text-sm">
                  <span className="font-semibold">Address:</span>{" "}
                  {user.address.street}, {user.address.city}
                </p>
              </div>

              <div className="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA+RJREFUSEvFlm1sU2UUx//nadkEpijs3m6oRBTfkdDeDjIDyZRoNPrJRPAFo5gQIu2t2Uj4YGayCGoMRly74RczTXyJop8I8cswziiM0N5KiCy+xM1kcWtvN8Q4ZdL2HvP0RVp2e3chNTxfmt5znv/vnPPc85xLuEKLrhAXlwWOBsyNJHiTDFowHQkZ6reXmsAlgWPa1B0Afw7w3ZUgBk4B/FjE8P3iNgDX4HfWpNTcApEEcH0N8bEGeP07jKV/uIG7BseC5gAY25xEiWhfOKHsri9YS08DtHQe0R90Q72zzmBzFkDjPKJ/6YbaVG/wCIB5sqHTuqGsriu4T0u/yaBd84i+rhvqS3UF999lNlkLYQC4zV6YTmcbZtu6hm88V1ewFIuun76BcvkvANxT1ceM+IKc9egLp1pMN1Dp47qdKgVjgfRWEH1QeMZ4Qk+qn7oFlv0cwW+1jy/0/tO4hYBVelLtLm+KBTMdYP6q8J/oPj2hDJVtfUHzVQv849VNfx/cNrRSdoLtsgUzmPoDU9uZeC8ABYAlzmFJaESdkSq1wNH109dQLv+7vMIBTDKhO5JQB+zIc8D7107e5PV6Pgaj/cIGPuEReHJn3DfqBO5da95KAh8Roa0CNpQDPdVpKJOVAVSBSy9PAoCvUEXGQNbK7+k82fpr1Rk7lLoQ2LrUSlieV8C8tbRvNNvQ2NY1vOSM7RnHtPSXAN0PIMeCH47EfUfsyuR0xpX+US3zCIEPFUpP9KGeUJ6ZA+5tS98rLDpazJQ6w0nl7VovRr9mbrCAb6RdABud5nFUM7sJ2FPwFZ4Vofiy8ap2igXTu8H0RtEBraG4mqoFPvg4e9KjmTEA5303K7dv/ozyNYMMmKssws9FGG0PG8q7VeBo0AwTI+YGLH2iAfM5+RtJqu/XghbO259ZDsG/FX04pBu+A1XgPn+6nQUdK9p5v570dTkJ9nSwV9p7hijnCNbMfgA7iwmJdaF4c7wKXIhOM+UXhr8kdGDaUPQekOUkXMsmA1v2Z0aW9dmSz3HdUP9r0ap26g2mVgsWwwDKM3UQRK+FE81fk2wuF0uef2rU3ATQywRsKJX4DHlEe/iE8lNZYs4F0hvIaIJY3r23lJ0YmBLAYQYNspUbjHzXmqmMQfY/8vkHycIDIDwE4NoLdh6xiLe8mGj5vnKP7ZX5XsfYVTMzi3eBIWfrIheJ2rmcZdDeRjRHdxiUvdjBcUhE/ZOKEJ7nGXj64lFYKxhmxAXRJ9m8d6Dz5HVna/m5Hov71qQWL/J6VzDnljNRKwgtRVExAcIECUyc98yO/y8fApdZctttrjOuJ1Rq/QsDtm4up7qtVQAAAABJRU5ErkJggg==" />
                <p className="text-sm">
                  <span className="font-semibold">City:</span>{" "}
                  {user.address.city}
                </p>
              </div>

              <div className="flex items-center">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAArBJREFUSEvtlt9LFFEUx79nZjXFyH7NGEGP9sMH0Z0tiiKWSh/Cx6wInytwZ8WKoIggIhAky921sB6Ceimjl/6AMAwq3JkMIZKEoKfdkbQtqXTdOTWCtrO/ZnUnfKj7eO4538+999xzzyWs0KAV4uI/ePHkQ17jIgidxBRRdemK2ynJOup7/o8V09+q7gNo/QOjy6omXXUTbgN318eqKsroGUC7MiFMdDoYlfrdgtvAYV98L5he5BFnAMdUTX7sBtwGjjQa+1nA8wLCcyBqUqPSYKlwG/iWN16fInrrIPoDELyqtvF9KXAb+EbD1FqPmJxyEmTm80G9ptvJr9B81q0OK8YnAFsKBL1hj+gPvt7w1VVwSDEeEXA0pyghOjdX1tQ5su5LKVArNnvH3ngbiB5klRNjWPyJA+3v5OlSoTnB/cpk9SySBkDl6QAzha0dI/IHN6A5wZYx7Iv3g+lkOoRAZwOa1PNXwaHGz3UkpEYBCGmghCBge/uwHMsFv10fk1Me8UQKGOrQJc1pgXnbYlgxbgLoyBAYTZav8p95WT2Zbu/Zk1hfNjtjvXg7AKSIqC0QlR4uqZwWnPvqjNVmJcYAbLYfOcaI0dKuy+OWff59LxcGwfDZ/JhOBXTpTj54wY9Ar3dCEYiHAFRmCJjEfDdpml0eUbQaR3MewAVVk7tyzTn+QCLeiRYmfpqr9JzyOD/PiKi6rGb6OoKtgIhv4jgzW7XtKQqW4UTg6wGt5lxGyoqTCinxZgINAKguLsLmNf27FNcQyGqt86OoHS9euJ3GJtNEyP47KWIZhEtqVL62rB2nB/Upxj4TsLrTbkcs44mqy0eWleN84r0NRq0o8iEGHQZwMMftf8WJhD84XjvjKjhdbKCVxdj45DYSTXnBLnznaL6msqQcOx7rEhz+PfAvEIDNH4iBOQMAAAAASUVORK5CYII=" />
                <p className="text-sm">
                  <span className="font-semibold">Phone:</span> {user.phone}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
