import { useState } from 'react';

import {
    ComposableMap,
    Geographies,
    Geography,
} from 'react-simple-maps';

import russiaRegions from '../../assets/maps/russia-regions.geojson?url';
import { warehouses } from '../../data/warehouses';

import './FieldMap.css';

function FieldMap() {
    const [selectedWarehouse, setSelectedWarehouse] =
        useState<number | null>(null);

    const activeWarehouse = warehouses.find(
        (warehouse) => warehouse.id === selectedWarehouse
    );

    return (
        <section className="field-section" id="results">
            <div className="content-wrap field-content">

                {/* Статистика */}
                <div className="field-stats">
                    {[
                        ['N', 'хозяйств', 'работают на нашей технике'],
                        ['N', 'гектар', 'обработано за сезон'],
                        ['N', 'лет', 'на рынке агротехники'],
                        ['N', 'часов', 'среднее время выезда сервиса'],
                        ['N', 'позиций', 'ходовых запчастей на складе'],
                    ].map(([value, title, caption]) => (
                        <div className="stat-tile" key={title}>
                            <strong>{value}</strong>
                            <b>{title}</b>
                            <span>{caption}</span>
                        </div>
                    ))}
                </div>

                <div className="field-map">
                    {/* Карта регионов */}
                    <ComposableMap
                        projection="geoMercator"
                        projectionConfig={{
                            center: [100, 62],
                            scale: 430,
                        }}
                        width={1000}
                        height={600}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Geographies geography={russiaRegions}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                            <Geography
                                key={geo.properties?.id}
                                geography={geo}
                                fill="#8DBB64"
                                stroke="#FFFFFF"
                                strokeWidth={0.5}
                            />
                            ))
                        }
                        </Geographies>
                    </ComposableMap>

                    {/* HTML-пины поверх карты */}
                    {warehouses.map((warehouse) => (
                        <button
                            key={warehouse.id}
                            type="button"
                            className={`map-pin ${warehouse.pinPosition} ${
                                selectedWarehouse === warehouse.id
                                    ? 'map-pin--active'
                                    : ''
                            }`}
                            aria-label={`Склад: ${warehouse.city}`}
                            aria-pressed={selectedWarehouse === warehouse.id}
                            onClick={() => setSelectedWarehouse(warehouse.id)}
                        />
                    ))}

                    {/* Карточка выбранного склада */}
                    {activeWarehouse && (
                        <div className="map-tooltip">
                            <button
                                className="map-tooltip-close"
                                type="button"
                                onClick={() => setSelectedWarehouse(null)}
                                aria-label="Закрыть информацию"
                            >
                                ×
                            </button>

                            <span className="map-tooltip-label">
                                Регион присутствия
                            </span>

                            <h3>{activeWarehouse.region}</h3>

                            <p>
                                <span>Город / посёлок</span>
                                <strong>{activeWarehouse.city}</strong>
                            </p>

                            <div className="map-tooltip-equipment">
                                <span>Задействованная техника</span>

                                {activeWarehouse.equipment.map((item) => (
                                    <strong key={item.model}>
                                        {`Задействовано ${item.quantity} ед. ${item.model}`}
                                    </strong>
                                ))}
                            </div>
                        </div>
                    )}

                    <span className="map-label">карта проектов</span>
                </div>
            </div>
        </section>
    );
}

export default FieldMap;