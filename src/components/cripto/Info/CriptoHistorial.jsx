import dayjs from "dayjs";
import { parseFloatNumber } from "../../../helpers/numbers";

const CriptoHistorial = ({history}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {history.reverse().map(({ date, priceUsd, time }) => (
                    <tr key={time}>
                        <td className="label">
                            {dayjs(date).format("DD MMMM YYYY")}
                        </td>
                        <td className="price">{parseFloatNumber(priceUsd, 3)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { CriptoHistorial }
